import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./tournaments.component').then((m) => m.TournamentsComponent),
	},
];
