import { ContentType } from '../content/content.interface';

export interface World {
	_id: string;
	name: string;
	description: string;
	cover: string;
	banner: string;
	followerCount: number;
	favoriteCount: number;
	contentTypes: ContentType[];
}
