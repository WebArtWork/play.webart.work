import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-creators.component').then((m) => m.ForCreatorsPageComponent),
	},
];
