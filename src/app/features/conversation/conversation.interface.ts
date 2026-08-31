export type ConversationKind = 'private' | 'group' | 'community';

export interface ConversationParticipant {
	playerId: string;
	name: string;
	avatar: string;
}

export interface Conversation {
	_id: string;
	kind: ConversationKind;
	title: string;
	participants: ConversationParticipant[];
	lastMessagePreview: string;
	lastMessageAt: string;
	unreadCount: number;
}
