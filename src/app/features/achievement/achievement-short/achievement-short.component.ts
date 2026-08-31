import { Component, input } from '@angular/core';
import { Achievement } from '../achievement.interface';

@Component({
	selector: 'app-achievement-short',
	standalone: true,
	imports: [],
	templateUrl: './achievement-short.component.html',
	styleUrl: './achievement-short.component.scss',
})
export class AchievementShortComponent {
	readonly entity = input.required<Achievement>();
	readonly unlocked = input<boolean>(false);
}
