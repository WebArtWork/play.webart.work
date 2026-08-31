import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { World } from '../world.interface';

@Component({
	selector: 'app-world-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './world-short.component.html',
	styleUrl: './world-short.component.scss',
})
export class WorldShortComponent {
	readonly entity = input.required<World>();
}
