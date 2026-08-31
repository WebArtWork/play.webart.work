import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./world.component').then((m) => m.WorldComponent),
	},
];
