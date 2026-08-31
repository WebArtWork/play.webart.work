import { Component, inject, input } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { FollowService } from '../../follow/follow.service';
import { World } from '../world.interface';

@Component({
	selector: 'app-world-view',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './world-view.component.html',
	styleUrl: './world-view.component.scss',
})
export class WorldViewComponent {
	readonly followService = inject(FollowService);

	readonly entity = input.required<World>();

	isFollowing(): boolean {
		return this.followService.isFollowing('world', this.entity()._id);
	}

	isFavorite(): boolean {
		return this.followService.isFavorite('world', this.entity()._id);
	}

	toggleFollow(): void {
		this.followService.toggleFollow('world', this.entity()._id);
	}

	toggleFavorite(): void {
		this.followService.toggleFavorite('world', this.entity()._id);
	}
}
