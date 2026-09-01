import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-creators',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-creators.component.html',
	styleUrl: './for-creators.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForCreatorsPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);
	readonly faq = [
		{
			question: 'Який контент можна публікувати творцю?',
			answer: 'Ігри, світи, комікси, книги, медіа та новини оновлень — усе під єдиною ідентичністю світу чи гри.',
		},
		{
			question: 'Чи можу я керувати спільнотою навколо свого світу чи гри?',
			answer: 'Так, WAW Play дає інструменти обговорень, коментарів і повідомлень для спілкування з гравцями та керування спільнотою.',
		},
		{
			question: 'Як гравці дізнаються про оновлення?',
			answer: 'Гравці, які стежать за вашим світом чи грою, отримують оновлення у своїй стрічці та профілі автоматично.',
		},
	];
}
