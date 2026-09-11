import { Component, computed, inject } from '@angular/core';
import { PlayerService } from '../../features/player/player.service';
import { PlayerShortComponent } from '../../features/player/player-short/player-short.component';

@Component({
	selector: 'app-players',
	standalone: true,
	imports: [PlayerShortComponent],
	templateUrl: './players.component.html',
	styleUrl: './players.component.scss',
})
export class PlayersComponent {
	private readonly _playerService = inject(PlayerService);

	readonly players = computed(() => this._playerService.list());
}
