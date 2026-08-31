import { Component, computed, inject, signal } from '@angular/core';
import { FollowService } from '../../features/follow/follow.service';
import { Game } from '../../features/game/game.interface';
import { GameService } from '../../features/game/game.service';
import { GameShortComponent } from '../../features/game/game-short/game-short.component';
import { PlayerService } from '../../features/player/player.service';
import { World } from '../../features/world/world.interface';
import { WorldService } from '../../features/world/world.service';
import { WorldShortComponent } from '../../features/world/world-short/world-short.component';

type LibraryTab = 'games' | 'worlds' | 'followed' | 'favorites' | 'recent' | 'undiscovered';
type SortBy = 'name' | 'popularity';

@Component({
	selector: 'app-library',
	standalone: true,
	imports: [WorldShortComponent, GameShortComponent],
	templateUrl: './library.component.html',
	styleUrl: './library.component.scss',
})
export class LibraryComponent {
	private readonly _worldService = inject(WorldService);
	private readonly _gameService = inject(GameService);
	private readonly _followService = inject(FollowService);
	private readonly _playerService = inject(PlayerService);

	readonly tabs: LibraryTab[] = ['games', 'worlds', 'followed', 'favorites', 'recent', 'undiscovered'];
	readonly activeTab = signal<LibraryTab>('games');
	readonly search = signal('');
	readonly sortBy = signal<SortBy>('popularity');

	readonly worlds = computed(() => this._worldService.list());
	readonly games = computed(() => this._gameService.list());

	readonly filteredWorlds = computed(() => this._filterWorlds());
	readonly filteredGames = computed(() => this._filterGames());

	setTab(tab: LibraryTab): void {
		this.activeTab.set(tab);
	}

	onSearch(value: string): void {
		this.search.set(value);
	}

	setSort(sort: SortBy): void {
		this.sortBy.set(sort);
	}

	private _matches(name: string): boolean {
		const term = this.search().trim().toLowerCase();
		return !term || name.toLowerCase().includes(term);
	}

	private _sortWorlds(items: World[]): World[] {
		return [...items].sort((a, b) => (this.sortBy() === 'name' ? a.name.localeCompare(b.name) : b.followerCount - a.followerCount));
	}

	private _sortGames(items: Game[]): Game[] {
		return [...items].sort((a, b) => (this.sortBy() === 'name' ? a.name.localeCompare(b.name) : b.followerCount - a.followerCount));
	}

	private _filterWorlds(): World[] {
		const player = this._playerService.currentPlayer();
		let items = this.worlds().filter((w) => this._matches(w.name));

		switch (this.activeTab()) {
			case 'followed':
				items = items.filter((w) => this._followService.isFollowing('world', w._id));
				break;
			case 'favorites':
				items = items.filter((w) => this._followService.isFavorite('world', w._id));
				break;
			case 'undiscovered':
				items = items.filter((w) => !this._followService.isFollowing('world', w._id) && !this._followService.isFavorite('world', w._id));
				break;
			case 'games':
			case 'recent':
				items = [];
				break;
			case 'worlds':
			default:
				break;
		}

		void player;
		return this._sortWorlds(items);
	}

	private _filterGames(): Game[] {
		const player = this._playerService.currentPlayer();
		let items = this.games().filter((g) => this._matches(g.name));

		switch (this.activeTab()) {
			case 'followed':
				items = items.filter((g) => this._followService.isFollowing('game', g._id));
				break;
			case 'favorites':
				items = items.filter((g) => this._followService.isFavorite('game', g._id));
				break;
			case 'recent':
				items = items.filter((g) => player.recentlyPlayedGameIds.includes(g._id));
				break;
			case 'undiscovered':
				items = items.filter(
					(g) => !this._followService.isFollowing('game', g._id) && !this._followService.isFavorite('game', g._id) && !player.recentlyPlayedGameIds.includes(g._id),
				);
				break;
			case 'worlds':
				items = [];
				break;
			case 'games':
			default:
				break;
		}

		return this._sortGames(items);
	}
}
