import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Player } from '../player.interface';

@Component({
	selector: 'app-player-icon',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './player-icon.component.html',
	styleUrl: './player-icon.component.scss',
})
export class PlayerIconComponent {
	readonly entity = input.required<Player>();
}
