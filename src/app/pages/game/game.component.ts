import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AchievementService } from '../../features/achievement/achievement.service';
import { AchievementShortComponent } from '../../features/achievement/achievement-short/achievement-short.component';
import { ContentService } from '../../features/content/content.service';
import { ContentShortComponent } from '../../features/content/content-short/content-short.component';
import { GameService } from '../../features/game/game.service';
import { GameViewComponent } from '../../features/game/game-view/game-view.component';
import { PlayerService } from '../../features/player/player.service';
import { RankingService } from '../../features/ranking/ranking.service';
import { RankingShortComponent } from '../../features/ranking/ranking-short/ranking-short.component';
import { WorldService } from '../../features/world/world.service';
import { ShareProfileComponent } from '../../shared/share-profile/share-profile.component';

@Component({
	selector: 'app-game',
	standalone: true,
	imports: [RouterLink, GameViewComponent, AchievementShortComponent, RankingShortComponent, ContentShortComponent, ShareProfileComponent],
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss',
})
export class GameComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _gameService = inject(GameService);
	private readonly _worldService = inject(WorldService);
	private readonly _achievementService = inject(AchievementService);
	private readonly _rankingService = inject(RankingService);
	private readonly _contentService = inject(ContentService);
	private readonly _playerService = inject(PlayerService);

	readonly gameId = toSignal(this._route.paramMap.pipe(map((p) => p.get('gameId') ?? '')), { initialValue: '' });

	readonly game = computed(() => this._gameService.getById(this.gameId()));
	readonly world = computed(() => {
		const worldId = this.game()?.worldId;
		return worldId ? this._worldService.getById(worldId) : undefined;
	});

	readonly achievements = computed(() => this._achievementService.listByGame(this.gameId()));
	readonly rankings = computed(() => this._rankingService.listByCategory('games').slice(0, 5));
	readonly relatedContent = computed(() => this._contentService.listByGame(this.gameId()));
	readonly currentPlayerId = computed(() => this._playerService.currentPlayerId());

	isUnlocked(achievementId: string): boolean {
		return this._achievementService.isUnlockedBy(achievementId, this.currentPlayerId());
	}

	shareUrl(): string {
		return `${location.origin}/game/${this.gameId()}`;
	}
}
