export type RankingCategory = 'games' | 'worlds' | 'players' | 'achievements';
export type RankedEntityType = 'game' | 'world' | 'player' | 'achievement';

export interface RankingEntry {
	_id: string;
	category: RankingCategory;
	rank: number;
	score: number;
	entityId: string;
	entityType: RankedEntityType;
	entityName: string;
	entityImage: string;
}
