import { Injectable, computed, signal } from '@angular/core';
import { CURRENT_PLAYER_ID, PLAYERS } from './player.data';
import { Player } from './player.interface';

@Injectable({ providedIn: 'root' })
export class PlayerService {
	readonly players = signal<Player[]>(PLAYERS);
	readonly currentPlayerId = signal<string>(CURRENT_PLAYER_ID);

	readonly currentPlayer = computed<Player>(
		() => this.players().find((p) => p._id === this.currentPlayerId()) ?? this.players()[0],
	);

	list(): Player[] {
		return this.players();
	}

	getById(id: string): Player | undefined {
		return this.players().find((p) => p._id === id);
	}
}
