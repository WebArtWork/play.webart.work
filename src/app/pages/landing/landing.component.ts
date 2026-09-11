import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingActivityItem {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	imports: [
		RouterLink,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly activity: LandingActivityItem[] = [
		{
			date: 'Сьогодні',
			icon: 'pi pi-trophy',
			title: 'Фінал літнього турніру',
			description: '3 місце у складі команди "Нічні Яструби"',
			tag: 'Турнір',
		},
		{
			date: 'Цей тиждень',
			icon: 'pi pi-star',
			title: 'Нове досягнення',
			description: '"100 перемог" відкрито у грі Star Raiders',
			tag: 'Досягнення',
		},
		{
			date: 'Минулий місяць',
			icon: 'pi pi-users',
			title: 'Приєднання до світу',
			description: 'Стали учасником спільноти Neon Arena',
			tag: 'Спільнота',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-th-large',
			title: 'Каталог ігор',
			description: 'Знаходьте нові ігри та світи за жанром, популярністю чи спільнотою.',
			linkLabel: 'Переглянути ігри',
			route: '/games',
		},
		{
			number: '02',
			icon: 'pi pi-users',
			title: 'Профілі гравців',
			description: 'Досягнення, історія матчів та улюблені ігри — в одному профілі.',
			linkLabel: 'Переглянути гравців',
			route: '/players',
		},
		{
			number: '03',
			icon: 'pi pi-trophy',
			title: 'Турніри',
			description: 'Реєструйтесь на змагання, грайте та піднімайтесь у рейтингу.',
			linkLabel: 'Переглянути турніри',
			route: '/tournaments',
		},
		{
			number: '04',
			icon: 'pi pi-images',
			title: 'Стрічка спільноти',
			description: 'Новини, кліпи та оновлення від гравців і творців, за якими стежите.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-players',
			title: 'Гравцям',
			description: 'Знаходьте ігри, стежте за прогресом і змагайтесь у турнірах.',
		},
		{
			number: '02',
			route: '/for-creators',
			title: 'Creator-ам',
			description: 'Публікуйте ігри та світи, керуйте спільнотою навколо них.',
		},
		{
			number: '03',
			route: '/library',
			title: 'Бібліотеці',
			description: 'Тримайте улюблені ігри та світи під рукою в одному місці.',
		},
	];
}
