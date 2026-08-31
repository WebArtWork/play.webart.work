import { Injectable, signal } from '@angular/core';
import { MESSAGES } from './message.data';
import { Message } from './message.interface';

@Injectable({ providedIn: 'root' })
export class MessageService {
	readonly messages = signal<Message[]>(MESSAGES);

	listByConversation(conversationId: string): Message[] {
		return this.messages()
			.filter((m) => m.conversationId === conversationId)
			.sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));
	}

	send(conversationId: string, senderId: string, senderName: string, senderAvatar: string, text: string): void {
		this.messages.set([
			...this.messages(),
			{
				_id: `msg-${Date.now()}`,
				conversationId,
				senderId,
				senderName,
				senderAvatar,
				text,
				timestamp: new Date().toISOString(),
				state: 'sent',
			},
		]);
	}
}
