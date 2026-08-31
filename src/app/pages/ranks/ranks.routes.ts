import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./ranks.component').then((m) => m.RanksComponent),
	},
];
