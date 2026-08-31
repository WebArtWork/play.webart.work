import { Component, inject, input } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { FollowService } from '../../follow/follow.service';
import { Game } from '../game.interface';

@Component({
	selector: 'app-game-view',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './game-view.component.html',
	styleUrl: './game-view.component.scss',
})
export class GameViewComponent {
	readonly followService = inject(FollowService);

	readonly entity = input.required<Game>();

	isFollowing(): boolean {
		return this.followService.isFollowing('game', this.entity()._id);
	}

	isFavorite(): boolean {
		return this.followService.isFavorite('game', this.entity()._id);
	}

	toggleFollow(): void {
		this.followService.toggleFollow('game', this.entity()._id);
	}

	toggleFavorite(): void {
		this.followService.toggleFavorite('game', this.entity()._id);
	}

	play(): void {
		window.open(this.entity().playUrl, '_blank', 'noopener');
	}
}
