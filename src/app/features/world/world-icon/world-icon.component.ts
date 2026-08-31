import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { World } from '../world.interface';

@Component({
	selector: 'app-world-icon',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './world-icon.component.html',
	styleUrl: './world-icon.component.scss',
})
export class WorldIconComponent {
	readonly entity = input.required<World>();
}
