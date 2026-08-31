import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../game.interface';

@Component({
	selector: 'app-game-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './game-short.component.html',
	styleUrl: './game-short.component.scss',
})
export class GameShortComponent {
	readonly entity = input.required<Game>();
}
