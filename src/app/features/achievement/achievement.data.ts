import { Achievement } from './achievement.interface';

export const ACHIEVEMENTS: Achievement[] = [
	{
		_id: 'ach-aurora-first-drift',
		gameId: 'game-aurora-tactics',
		name: 'First Drift',
		description: 'Win your first match after a platform drift.',
		icon: 'pi pi-compass',
		unlockedBy: ['player-1', 'player-2'],
	},
	{
		_id: 'ach-aurora-flawless',
		gameId: 'game-aurora-tactics',
		name: 'Flawless Skirmish',
		description: 'Win a match without losing a single unit.',
		icon: 'pi pi-star-fill',
		unlockedBy: ['player-2'],
	},
	{
		_id: 'ach-ember-first-forge',
		gameId: 'game-emberforge',
		name: 'First Forge',
		description: 'Craft your first living-fire weapon.',
		icon: 'pi pi-bolt',
		unlockedBy: ['player-1', 'player-3'],
	},
	{
		_id: 'ach-ember-survivor',
		gameId: 'game-emberforge',
		name: 'Ember Survivor',
		description: 'Survive 10 nights on hardcore difficulty.',
		icon: 'pi pi-shield',
		unlockedBy: ['player-3'],
	},
	{
		_id: 'ach-glassdive-deep',
		gameId: 'game-glassdive',
		name: 'Cathedral Diver',
		description: 'Reach the Cathedral vault without surfacing.',
		icon: 'pi pi-arrow-down',
		unlockedBy: ['player-4'],
	},
	{
		_id: 'ach-null-500',
		gameId: 'game-nullpoint-relay',
		name: '500 Station-Days',
		description: 'Keep the station alive for 500 days in one run.',
		icon: 'pi pi-clock',
		unlockedBy: ['player-1', 'player-5'],
	},
];
