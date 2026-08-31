export interface GameMedia {
	type: 'image' | 'video';
	url: string;
}

export interface GameRules {
	summary: string;
	details: string;
}

export interface Game {
	_id: string;
	worldId: string;
	name: string;
	description: string;
	cover: string;
	media: GameMedia[];
	rules: GameRules;
	playUrl: string;
	followerCount: number;
	favoriteCount: number;
}
