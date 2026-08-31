import { Component, input, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';

/**
 * Entity-agnostic "share this" component: copy link + social share buttons.
 * Usable from Player Profile, World, and Game pages.
 */
@Component({
	selector: 'app-share-profile',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './share-profile.component.html',
	styleUrl: './share-profile.component.scss',
})
export class ShareProfileComponent {
	readonly title = input.required<string>();
	readonly url = input.required<string>();
	readonly description = input<string>('');

	readonly copied = signal(false);

	copyLink(): void {
		navigator.clipboard?.writeText(this.url()).then(() => {
			this.copied.set(true);
			setTimeout(() => this.copied.set(false), 1500);
		});
	}

	shareTo(network: 'telegram' | 'twitter' | 'facebook'): void {
		const encodedUrl = encodeURIComponent(this.url());
		const encodedTitle = encodeURIComponent(this.title());
		const links: Record<typeof network, string> = {
			telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
			twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		};

		window.open(links[network], '_blank', 'noopener');
	}
}
