export interface Achievement {
	_id: string;
	gameId: string;
	name: string;
	description: string;
	icon: string;
	unlockedBy: string[];
}
