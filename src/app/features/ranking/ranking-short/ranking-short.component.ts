import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RankedEntityType, RankingEntry } from '../ranking.interface';

const ROUTE_BY_TYPE: Record<RankedEntityType, string> = {
	game: '/game',
	world: '/world',
	player: '/profile',
	achievement: '/ranks',
};

@Component({
	selector: 'app-ranking-short',
	standalone: true,
	imports: [RouterLink, DecimalPipe],
	templateUrl: './ranking-short.component.html',
	styleUrl: './ranking-short.component.scss',
})
export class RankingShortComponent {
	readonly entity = input.required<RankingEntry>();

	link(): string[] {
		return [ROUTE_BY_TYPE[this.entity().entityType], this.entity().entityId];
	}
}
