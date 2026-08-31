import { Injectable, signal } from '@angular/core';
import { CONVERSATIONS } from './conversation.data';
import { Conversation } from './conversation.interface';

@Injectable({ providedIn: 'root' })
export class ConversationService {
	readonly conversations = signal<Conversation[]>(CONVERSATIONS);

	list(): Conversation[] {
		return [...this.conversations()].sort((a, b) => (a.lastMessageAt < b.lastMessageAt ? 1 : -1));
	}

	getById(id: string): Conversation | undefined {
		return this.conversations().find((c) => c._id === id);
	}
}
