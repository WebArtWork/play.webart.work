export interface PlayerActivityItem {
	_id: string;
	text: string;
	timestamp: string;
}

export interface Player {
	_id: string;
	name: string;
	avatar: string;
	bio: string;
	achievementIds: string[];
	favoriteWorldIds: string[];
	favoriteGameIds: string[];
	followedWorldIds: string[];
	followedGameIds: string[];
	followedPlayerIds: string[];
	friendIds: string[];
	recentlyPlayedGameIds: string[];
	activity: PlayerActivityItem[];
}
