export type FollowableType = 'world' | 'game' | 'player';
export type FollowKind = 'follow' | 'favorite';

/**
 * Generic follow/favorite relation, shared across world/game/player so those
 * entities don't each need their own follow/favorite bookkeeping fields
 * beyond simple display counts.
 */
export interface FollowRelation {
	playerId: string;
	entityType: FollowableType;
	entityId: string;
	kind: FollowKind;
}
