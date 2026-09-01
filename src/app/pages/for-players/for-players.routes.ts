import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-players.component').then((m) => m.ForPlayersPageComponent),
	},
];
