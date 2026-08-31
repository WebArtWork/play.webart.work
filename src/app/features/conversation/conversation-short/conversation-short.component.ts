import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Conversation } from '../conversation.interface';

@Component({
	selector: 'app-conversation-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './conversation-short.component.html',
	styleUrl: './conversation-short.component.scss',
})
export class ConversationShortComponent {
	readonly entity = input.required<Conversation>();
}
