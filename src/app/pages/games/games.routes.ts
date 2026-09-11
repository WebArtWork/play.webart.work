import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./games.component').then((m) => m.GamesComponent),
	},
];
