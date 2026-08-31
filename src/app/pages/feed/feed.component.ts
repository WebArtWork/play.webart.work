import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../features/content/content.service';
import { FollowService } from '../../features/follow/follow.service';

@Component({
	selector: 'app-feed',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _contentService = inject(ContentService);
	private readonly _followService = inject(FollowService);

	private readonly _likedLocally = signal<Set<string>>(new Set());

	readonly items = computed(() => this._contentService.list());

	isLiked(contentId: string): boolean {
		return this._likedLocally().has(contentId);
	}

	toggleLike(contentId: string): void {
		const set = new Set(this._likedLocally());
		if (set.has(contentId)) {
			set.delete(contentId);
		} else {
			set.add(contentId);
		}

		this._likedLocally.set(set);
	}

	isFavorite(gameId: string | undefined): boolean {
		return !!gameId && this._followService.isFavorite('game', gameId);
	}

	toggleFavorite(gameId: string | undefined): void {
		if (gameId) {
			this._followService.toggleFavorite('game', gameId);
		}
	}

	comment(contentId: string): void {
		// Stub — no backend to persist comments against yet.
		console.log('open comments for', contentId);
	}
}
