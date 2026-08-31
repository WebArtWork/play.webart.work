import { Injectable, computed, inject, signal } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { FollowRelation, FollowableType, FollowKind } from './follow.interface';

/**
 * Generic follow/favorite bookkeeping shared across world/game/player, so
 * those entities only carry simple display counts instead of duplicating
 * follow/favorite fields each.
 */
@Injectable({ providedIn: 'root' })
export class FollowService {
	private readonly _playerService = inject(PlayerService);

	private readonly _relations = signal<FollowRelation[]>(this._seed());

	readonly relations = computed(() => this._relations());

	isFollowing(entityType: FollowableType, entityId: string): boolean {
		return this._has(entityType, entityId, 'follow');
	}

	isFavorite(entityType: FollowableType, entityId: string): boolean {
		return this._has(entityType, entityId, 'favorite');
	}

	toggleFollow(entityType: FollowableType, entityId: string): void {
		this._toggle(entityType, entityId, 'follow');
	}

	toggleFavorite(entityType: FollowableType, entityId: string): void {
		this._toggle(entityType, entityId, 'favorite');
	}

	private _has(entityType: FollowableType, entityId: string, kind: FollowKind): boolean {
		const playerId = this._playerService.currentPlayerId();
		return this._relations().some(
			(r) => r.playerId === playerId && r.entityType === entityType && r.entityId === entityId && r.kind === kind,
		);
	}

	private _toggle(entityType: FollowableType, entityId: string, kind: FollowKind): void {
		const playerId = this._playerService.currentPlayerId();
		const exists = this._has(entityType, entityId, kind);

		this._relations.set(
			exists
				? this._relations().filter(
						(r) => !(r.playerId === playerId && r.entityType === entityType && r.entityId === entityId && r.kind === kind),
					)
				: [...this._relations(), { playerId, entityType, entityId, kind }],
		);
	}

	private _seed(): FollowRelation[] {
		const player = this._playerService.currentPlayer();
		const relations: FollowRelation[] = [];

		for (const id of player.followedWorldIds) relations.push({ playerId: player._id, entityType: 'world', entityId: id, kind: 'follow' });
		for (const id of player.followedGameIds) relations.push({ playerId: player._id, entityType: 'game', entityId: id, kind: 'follow' });
		for (const id of player.followedPlayerIds) relations.push({ playerId: player._id, entityType: 'player', entityId: id, kind: 'follow' });
		for (const id of player.favoriteWorldIds) relations.push({ playerId: player._id, entityType: 'world', entityId: id, kind: 'favorite' });
		for (const id of player.favoriteGameIds) relations.push({ playerId: player._id, entityType: 'game', entityId: id, kind: 'favorite' });

		return relations;
	}
}
