import { Injectable, signal } from '@angular/core';
import { CONTENT_ITEMS } from './content.data';
import { Content, ContentType } from './content.interface';

@Injectable({ providedIn: 'root' })
export class ContentService {
	readonly items = signal<Content[]>(CONTENT_ITEMS);

	list(): Content[] {
		return this.items();
	}

	getById(id: string): Content | undefined {
		return this.items().find((c) => c._id === id);
	}

	listByWorld(worldId: string, type?: ContentType): Content[] {
		return this.items().filter((c) => c.worldId === worldId && (!type || c.type === type));
	}

	listByGame(gameId: string): Content[] {
		return this.items().filter((c) => c.gameId === gameId);
	}
}
