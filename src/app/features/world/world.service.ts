import { Injectable, signal } from '@angular/core';
import { WORLDS } from './world.data';
import { World } from './world.interface';

@Injectable({ providedIn: 'root' })
export class WorldService {
	readonly worlds = signal<World[]>(WORLDS);

	list(): World[] {
		return this.worlds();
	}

	getById(id: string): World | undefined {
		return this.worlds().find((w) => w._id === id);
	}
}
