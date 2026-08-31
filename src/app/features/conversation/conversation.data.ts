import { Conversation } from './conversation.interface';

export const CONVERSATIONS: Conversation[] = [
	{
		_id: 'conv-1',
		kind: 'private',
		title: 'Nova Voss',
		participants: [
			{ playerId: 'player-1', name: 'You', avatar: 'https://i.pravatar.cc/150?u=player-1' },
			{ playerId: 'player-2', name: 'Nova Voss', avatar: 'https://i.pravatar.cc/150?u=player-2' },
		],
		lastMessagePreview: 'That drift-timing trick is insane, teach me',
		lastMessageAt: '2026-08-31T20:10:00Z',
		unreadCount: 2,
	},
	{
		_id: 'conv-2',
		kind: 'group',
		title: 'Emberforge Crafting Crew',
		participants: [
			{ playerId: 'player-1', name: 'You', avatar: 'https://i.pravatar.cc/150?u=player-1' },
			{ playerId: 'player-3', name: 'Studio Cindergate', avatar: 'https://i.pravatar.cc/150?u=player-3' },
			{ playerId: 'player-4', name: 'Reef Runner', avatar: 'https://i.pravatar.cc/150?u=player-4' },
		],
		lastMessagePreview: 'New forge recipe dropped, check the pinned post',
		lastMessageAt: '2026-08-31T09:45:00Z',
		unreadCount: 0,
	},
	{
		_id: 'conv-3',
		kind: 'community',
		title: 'Nullpoint Relay — Discussion',
		participants: [
			{ playerId: 'player-1', name: 'You', avatar: 'https://i.pravatar.cc/150?u=player-1' },
			{ playerId: 'player-5', name: 'WAW Newsroom', avatar: 'https://i.pravatar.cc/150?u=player-5' },
		],
		lastMessagePreview: 'WAW Newsroom: 1M station-days milestone thread is live',
		lastMessageAt: '2026-08-30T08:05:00Z',
		unreadCount: 5,
	},
	{
		_id: 'conv-4',
		kind: 'private',
		title: 'Reef Runner',
		participants: [
			{ playerId: 'player-1', name: 'You', avatar: 'https://i.pravatar.cc/150?u=player-1' },
			{ playerId: 'player-4', name: 'Reef Runner', avatar: 'https://i.pravatar.cc/150?u=player-4' },
		],
		lastMessagePreview: 'gg on the Cathedral run, want a co-op partner next time?',
		lastMessageAt: '2026-08-20T10:00:00Z',
		unreadCount: 0,
	},
];
