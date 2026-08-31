import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ContentType } from '../../features/content/content.interface';
import { ContentService } from '../../features/content/content.service';
import { ContentShortComponent } from '../../features/content/content-short/content-short.component';
import { GameService } from '../../features/game/game.service';
import { GameShortComponent } from '../../features/game/game-short/game-short.component';
import { WorldService } from '../../features/world/world.service';
import { WorldViewComponent } from '../../features/world/world-view/world-view.component';
import { ShareProfileComponent } from '../../shared/share-profile/share-profile.component';

@Component({
	selector: 'app-world',
	standalone: true,
	imports: [RouterLink, WorldViewComponent, GameShortComponent, ContentShortComponent, ShareProfileComponent],
	templateUrl: './world.component.html',
	styleUrl: './world.component.scss',
})
export class WorldComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _worldService = inject(WorldService);
	private readonly _gameService = inject(GameService);
	private readonly _contentService = inject(ContentService);

	readonly worldId = toSignal(this._route.paramMap.pipe(map((p) => p.get('worldId') ?? '')), { initialValue: '' });

	readonly world = computed(() => this._worldService.getById(this.worldId()));
	readonly games = computed(() => this._gameService.listByWorld(this.worldId()));

	readonly contentTypes = computed(() => this.world()?.contentTypes ?? []);

	private readonly _selectedType = signal<ContentType | null>(null);

	readonly activeType = computed(() => this._selectedType() ?? this.contentTypes()[0] ?? null);

	readonly activeContent = computed(() => {
		const type = this.activeType();
		return type ? this._contentService.listByWorld(this.worldId(), type) : [];
	});

	setActiveType(type: ContentType): void {
		this._selectedType.set(type);
	}

	shareUrl(): string {
		return `${location.origin}/world/${this.worldId()}`;
	}
}
