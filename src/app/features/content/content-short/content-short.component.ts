import { Component, input } from '@angular/core';
import { Content } from '../content.interface';

@Component({
	selector: 'app-content-short',
	standalone: true,
	imports: [],
	templateUrl: './content-short.component.html',
	styleUrl: './content-short.component.scss',
})
export class ContentShortComponent {
	readonly entity = input.required<Content>();
}
