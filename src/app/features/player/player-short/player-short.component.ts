import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../player.interface';

@Component({
	selector: 'app-player-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './player-short.component.html',
	styleUrl: './player-short.component.scss',
})
export class PlayerShortComponent {
	readonly entity = input.required<Player>();
}
