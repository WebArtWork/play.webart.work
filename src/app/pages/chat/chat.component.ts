import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ConversationService } from '../../features/conversation/conversation.service';
import { MessageService } from '../../features/message/message.service';
import { PlayerService } from '../../features/player/player.service';

@Component({
	selector: 'app-chat',
	standalone: true,
	imports: [RouterLink, DatePipe],
	templateUrl: './chat.component.html',
	styleUrl: './chat.component.scss',
})
export class ChatComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _conversationService = inject(ConversationService);
	private readonly _messageService = inject(MessageService);
	private readonly _playerService = inject(PlayerService);

	readonly conversationId = toSignal(this._route.paramMap.pipe(map((p) => p.get('conversationId') ?? '')), { initialValue: '' });

	readonly conversation = computed(() => this._conversationService.getById(this.conversationId()));
	readonly messages = computed(() => this._messageService.listByConversation(this.conversationId()));

	readonly draft = signal('');

	sendMessage(): void {
		const text = this.draft().trim();
		if (!text) {
			return;
		}

		const player = this._playerService.currentPlayer();
		this._messageService.send(this.conversationId(), player._id, player.name, player.avatar, text);
		this.draft.set('');
	}

	onDraftChange(value: string): void {
		this.draft.set(value);
	}

	isMine(senderId: string): boolean {
		return senderId === this._playerService.currentPlayerId();
	}
}
