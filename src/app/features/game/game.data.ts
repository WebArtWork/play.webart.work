import { Game } from './game.interface';

export const GAMES: Game[] = [
	{
		_id: 'game-aurora-tactics',
		worldId: 'world-aurora',
		name: 'Aurora Tactics',
		description: 'Turn-based skirmishes fought on drifting sky-platforms above Aurora Drift.',
		cover: 'https://picsum.photos/seed/game-aurora-cover/600/400',
		media: [
			{ type: 'image', url: 'https://picsum.photos/seed/game-aurora-1/800/500' },
			{ type: 'image', url: 'https://picsum.photos/seed/game-aurora-2/800/500' },
			{ type: 'video', url: 'https://example.com/media/game-aurora-trailer.mp4' },
		],
		rules: {
			summary: 'Command a squad of three across a shifting hex-platform battlefield.',
			details: 'Each match lasts 8 rounds. Platforms drift every 2 rounds, changing line of sight. Units gain power from proximity to the aurora zone at the map center.',
		},
		playUrl: 'https://play.example.com/aurora-tactics',
		followerCount: 7320,
		favoriteCount: 2110,
	},
	{
		_id: 'game-emberforge',
		worldId: 'world-ember',
		name: 'Emberforge',
		description: 'A crafting-survival game about smithing living-fire weapons in Emberfall.',
		cover: 'https://picsum.photos/seed/game-ember-cover/600/400',
		media: [
			{ type: 'image', url: 'https://picsum.photos/seed/game-ember-1/800/500' },
			{ type: 'video', url: 'https://example.com/media/game-emberforge-trailer.mp4' },
		],
		rules: {
			summary: 'Gather volcanic ore, forge gear, and defend your outpost each nightfall.',
			details: 'Days are for gathering and crafting; nights spawn ember-wraiths that scale with your outpost tier. Permadeath on hardcore difficulty only.',
		},
		playUrl: 'https://play.example.com/emberforge',
		followerCount: 5140,
		favoriteCount: 1620,
	},
	{
		_id: 'game-glassdive',
		worldId: 'world-tide',
		name: 'Glassdive',
		description: 'Co-op exploration of the submerged Tideglass ruins.',
		cover: 'https://picsum.photos/seed/game-tide-cover/600/400',
		media: [{ type: 'image', url: 'https://picsum.photos/seed/game-tide-1/800/500' }],
		rules: {
			summary: 'Dive in teams of up to four, managing shared oxygen and light.',
			details: 'Deeper ruins hold better salvage but drain oxygen faster. Surfacing mid-dive resets the room but banks any salvage already carried.',
		},
		playUrl: 'https://play.example.com/glassdive',
		followerCount: 2050,
		favoriteCount: 610,
	},
	{
		_id: 'game-nullpoint-relay',
		worldId: 'world-nullpoint',
		name: 'Nullpoint Relay',
		description: 'Keep a dying station alive by routing power around a collapsing black hole.',
		cover: 'https://picsum.photos/seed/game-null-cover/600/400',
		media: [
			{ type: 'image', url: 'https://picsum.photos/seed/game-null-1/800/500' },
			{ type: 'image', url: 'https://picsum.photos/seed/game-null-2/800/500' },
		],
		rules: {
			summary: 'Real-time puzzle: reroute power conduits before systems fail.',
			details: 'Gravity shear randomizes conduit layouts every 90 seconds. Score is measured in station-days survived.',
		},
		playUrl: 'https://play.example.com/nullpoint-relay',
		followerCount: 12980,
		favoriteCount: 4310,
	},
];
