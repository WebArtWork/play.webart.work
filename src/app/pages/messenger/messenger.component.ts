import { Component, computed, inject, signal } from '@angular/core';
import { ConversationService } from '../../features/conversation/conversation.service';
import { ConversationShortComponent } from '../../features/conversation/conversation-short/conversation-short.component';

@Component({
	selector: 'app-messenger',
	standalone: true,
	imports: [ConversationShortComponent],
	templateUrl: './messenger.component.html',
	styleUrl: './messenger.component.scss',
})
export class MessengerComponent {
	private readonly _conversationService = inject(ConversationService);

	readonly search = signal('');

	readonly conversations = computed(() => {
		const term = this.search().trim().toLowerCase();
		const all = this._conversationService.list();
		return term ? all.filter((c) => c.title.toLowerCase().includes(term)) : all;
	});

	onSearch(value: string): void {
		this.search.set(value);
	}
}
