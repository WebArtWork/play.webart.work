import { Component, computed, inject } from '@angular/core';
import { GameService } from '../../features/game/game.service';
import { GameShortComponent } from '../../features/game/game-short/game-short.component';

@Component({
	selector: 'app-games',
	standalone: true,
	imports: [GameShortComponent],
	templateUrl: './games.component.html',
	styleUrl: './games.component.scss',
})
export class GamesComponent {
	private readonly _gameService = inject(GameService);

	readonly games = computed(() => this._gameService.list());
}
