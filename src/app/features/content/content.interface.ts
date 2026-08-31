export type ContentType = 'video' | 'comic' | 'book' | 'news' | 'character' | 'image';

export interface ContentCreator {
	playerId: string;
	name: string;
	avatar: string;
}

/**
 * Generic content item used on both World pages and the Feed.
 * `type` is a discriminator so new content types can be added later
 * without restructuring the interface.
 */
export interface Content {
	_id: string;
	type: ContentType;
	title: string;
	description: string;
	mediaUrl: string;
	thumbnail: string;
	worldId?: string;
	gameId?: string;
	creator: ContentCreator;
	likeCount: number;
	commentCount: number;
	createdAt: string;
}
