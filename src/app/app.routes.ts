import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
