import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-players',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-players.component.html',
	styleUrl: './for-players.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForPlayersPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);
	readonly faq = [
		{
			question: 'WAW Play безкоштовний?',
			answer: 'Так, реєстрація та використання платформи безкоштовні. Окремі ігри чи світи можуть мати власні умови доступу.',
		},
		{
			question: 'Як стежити за улюбленим світом чи грою?',
			answer: 'Відкрийте сторінку світу або гри та натисніть "Стежити" — оновлення з\'являться у вашій стрічці та профілі.',
		},
		{
			question: 'Чи можуть гравці спілкуватися між собою?',
			answer: 'Так, у месенджері WAW Play доступні особисті й групові чати, а також обговорення довкола ігор і світів.',
		},
	];
}
