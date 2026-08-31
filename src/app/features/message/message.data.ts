import { Message } from './message.interface';

export const MESSAGES: Message[] = [
	{ _id: 'msg-1', conversationId: 'conv-1', senderId: 'player-2', senderName: 'Nova Voss', senderAvatar: 'https://i.pravatar.cc/150?u=player-2', text: 'gg that last match, your drift timing is insane', timestamp: '2026-08-31T20:05:00Z', state: 'read' },
	{ _id: 'msg-2', conversationId: 'conv-1', senderId: 'player-1', senderName: 'You', senderAvatar: 'https://i.pravatar.cc/150?u=player-1', text: 'haha thanks, mostly luck on the platform shift', timestamp: '2026-08-31T20:07:00Z', state: 'read' },
	{ _id: 'msg-3', conversationId: 'conv-1', senderId: 'player-2', senderName: 'Nova Voss', senderAvatar: 'https://i.pravatar.cc/150?u=player-2', text: 'That drift-timing trick is insane, teach me', timestamp: '2026-08-31T20:10:00Z', state: 'sent' },

	{ _id: 'msg-4', conversationId: 'conv-2', senderId: 'player-3', senderName: 'Studio Cindergate', senderAvatar: 'https://i.pravatar.cc/150?u=player-3', text: 'New forge recipe dropped, check the pinned post', timestamp: '2026-08-31T09:45:00Z', state: 'read' },

	{ _id: 'msg-5', conversationId: 'conv-3', senderId: 'player-5', senderName: 'WAW Newsroom', senderAvatar: 'https://i.pravatar.cc/150?u=player-5', text: 'WAW Newsroom: 1M station-days milestone thread is live', timestamp: '2026-08-30T08:05:00Z', state: 'sent' },

	{ _id: 'msg-6', conversationId: 'conv-4', senderId: 'player-4', senderName: 'Reef Runner', senderAvatar: 'https://i.pravatar.cc/150?u=player-4', text: 'gg on the Cathedral run, want a co-op partner next time?', timestamp: '2026-08-20T10:00:00Z', state: 'read' },
];
