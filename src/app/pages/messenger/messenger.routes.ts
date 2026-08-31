import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./messenger.component').then((m) => m.MessengerComponent),
	},
	{
		path: ':conversationId',
		loadComponent: () => import('../chat/chat.component').then((m) => m.ChatComponent),
	},
];
