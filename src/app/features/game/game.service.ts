import { Injectable, signal } from '@angular/core';
import { GAMES } from './game.data';
import { Game } from './game.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
	readonly games = signal<Game[]>(GAMES);

	list(): Game[] {
		return this.games();
	}

	getById(id: string): Game | undefined {
		return this.games().find((g) => g._id === id);
	}

	listByWorld(worldId: string): Game[] {
		return this.games().filter((g) => g.worldId === worldId);
	}
}
