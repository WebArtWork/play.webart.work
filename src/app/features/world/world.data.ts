import { World } from './world.interface';

export const WORLDS: World[] = [
	{
		_id: 'world-aurora',
		name: 'Aurora Drift',
		description: 'A frozen sky-archipelago where floating cities chase the aurora for power.',
		cover: 'https://picsum.photos/seed/world-aurora-cover/600/400',
		banner: 'https://picsum.photos/seed/world-aurora-banner/1600/500',
		followerCount: 18420,
		favoriteCount: 6210,
		contentTypes: ['video', 'comic', 'news', 'character'],
	},
	{
		_id: 'world-ember',
		name: 'Emberfall',
		description: 'Volcanic frontier world settled by exiles who forge weapons from living fire.',
		cover: 'https://picsum.photos/seed/world-ember-cover/600/400',
		banner: 'https://picsum.photos/seed/world-ember-banner/1600/500',
		followerCount: 9310,
		favoriteCount: 2870,
		contentTypes: ['video', 'book', 'character', 'news'],
	},
	{
		_id: 'world-tide',
		name: 'Tideglass',
		description: 'Submerged ruins of a glass empire, explored by diver-scholars and salvage crews.',
		cover: 'https://picsum.photos/seed/world-tide-cover/600/400',
		banner: 'https://picsum.photos/seed/world-tide-banner/1600/500',
		followerCount: 4120,
		favoriteCount: 980,
		contentTypes: ['comic', 'book', 'news'],
	},
	{
		_id: 'world-nullpoint',
		name: 'Nullpoint',
		description: 'A dying station orbiting a black hole, and the crews trying to keep it running.',
		cover: 'https://picsum.photos/seed/world-null-cover/600/400',
		banner: 'https://picsum.photos/seed/world-null-banner/1600/500',
		followerCount: 26770,
		favoriteCount: 11040,
		contentTypes: ['video', 'character', 'news', 'image'],
	},
];
