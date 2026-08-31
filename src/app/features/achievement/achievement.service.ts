import { Injectable, signal } from '@angular/core';
import { ACHIEVEMENTS } from './achievement.data';
import { Achievement } from './achievement.interface';

@Injectable({ providedIn: 'root' })
export class AchievementService {
	readonly achievements = signal<Achievement[]>(ACHIEVEMENTS);

	list(): Achievement[] {
		return this.achievements();
	}

	getById(id: string): Achievement | undefined {
		return this.achievements().find((a) => a._id === id);
	}

	listByGame(gameId: string): Achievement[] {
		return this.achievements().filter((a) => a.gameId === gameId);
	}

	isUnlockedBy(achievementId: string, playerId: string): boolean {
		return this.getById(achievementId)?.unlockedBy.includes(playerId) ?? false;
	}
}
