import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../game.interface';

@Component({
	selector: 'app-game-icon',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './game-icon.component.html',
	styleUrl: './game-icon.component.scss',
})
export class GameIconComponent {
	readonly entity = input.required<Game>();
}
