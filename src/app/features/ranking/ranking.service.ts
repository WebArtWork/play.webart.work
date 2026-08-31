import { Injectable, signal } from '@angular/core';
import { RANKING_ENTRIES } from './ranking.data';
import { RankingCategory, RankingEntry } from './ranking.interface';

@Injectable({ providedIn: 'root' })
export class RankingService {
	readonly entries = signal<RankingEntry[]>(RANKING_ENTRIES);

	listByCategory(category: RankingCategory): RankingEntry[] {
		return this.entries()
			.filter((e) => e.category === category)
			.sort((a, b) => a.rank - b.rank);
	}
}
