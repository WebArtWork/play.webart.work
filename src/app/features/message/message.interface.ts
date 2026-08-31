export type MessageState = 'sent' | 'read';

export interface Message {
	_id: string;
	conversationId: string;
	senderId: string;
	senderName: string;
	senderAvatar: string;
	text: string;
	timestamp: string;
	state: MessageState;
}
