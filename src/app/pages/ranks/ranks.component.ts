import { Component, computed, inject, signal } from '@angular/core';
import { RankingCategory } from '../../features/ranking/ranking.interface';
import { RankingService } from '../../features/ranking/ranking.service';
import { RankingShortComponent } from '../../features/ranking/ranking-short/ranking-short.component';

const CATEGORIES: RankingCategory[] = ['games', 'worlds', 'players', 'achievements'];

@Component({
	selector: 'app-ranks',
	standalone: true,
	imports: [RankingShortComponent],
	templateUrl: './ranks.component.html',
	styleUrl: './ranks.component.scss',
})
export class RanksComponent {
	private readonly _rankingService = inject(RankingService);

	readonly categories = CATEGORIES;
	readonly category = signal<RankingCategory>('games');

	readonly entries = computed(() => this._rankingService.listByCategory(this.category()));

	setCategory(category: RankingCategory): void {
		this.category.set(category);
	}
}
