import {
	ApplicationConfig,
	provideZonelessChangeDetection,
} from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	withInMemoryScrolling,
	withPreloading,
} from '@angular/router';
import {
	provideNgxAce,
	registerAceMode,
	registerAceTheme,
} from '@wawjs/ngx-ace';
import { provideNgxCore } from '@wawjs/ngx-core';
import { provideNgxCrud } from '@wawjs/ngx-crud';
import { provideNgxHttp } from '@wawjs/ngx-http';
import { provideNgxSocket } from '@wawjs/ngx-socket';
import { provideNgxTinymce } from '@wawjs/ngx-tinymce';
import { provideTranslate } from '@wawjs/ngx-translate';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';
import { definePreset } from '@wawjs/css-prime-styled';
import Aura from '@wawjs/css-prime-themes/aura';

/** WAW Play brand neon lime, matched to the logo's play-triangle color. */
const PlayPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '#fafce8',
			100: '#f2f7c2',
			200: '#e6ef8a',
			300: '#d6e34c',
			400: '#c6d61f',
			500: '#a8b815',
			600: '#859011',
			700: '#687112',
			800: '#565c15',
			900: '#4a4e17',
			950: '#282a0a',
		},
	},
});
import { NgxBosConfig, ngxBosProvide } from '@wawjs/ngx-bos';
import { io } from 'socket.io-client';
import { environment } from '@env';
import { provideFormComponents } from './app.formcomponents';
import { routes } from './app.routes';
import { tinymceConfig } from './tinymce.config';
import { wawjsConfig } from './wawjs.config';

registerAceMode('javascript', () =>
	import('ace-builds/src-noconflict/mode-javascript'),
);
registerAceTheme('clouds', () =>
	import('ace-builds/src-noconflict/theme-clouds'),
);
registerAceTheme('github', () =>
	import('ace-builds/src-noconflict/theme-github'),
);

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		ngxBosProvide({
			appId: environment.appId,
			url: environment.url,
			roles: environment.roles,
			userFields:
				(environment as unknown as { userFields?: string[] })
					.userFields ?? [],
			userForm:
				(environment as unknown as {
					userForm?: NgxBosConfig['userForm'];
				}).userForm ?? [],
			defaultUserThumb: 'default.png',
		}),
		provideFormComponents(),
		provideNgxCore(wawjsConfig),
		provideNgxHttp(wawjsConfig),
		provideNgxCrud(wawjsConfig),
		provideNgxSocket({ ...wawjsConfig, io }),
		provideNgxAce({
			mode: 'text',
			theme: 'github',
			useWorker: false,
		}),
		provideTranslate({
			defaultLanguage: environment.defaultLanguageCode,
			languages: environment.languages,
			folder: '/i18n/',
			persistLanguage: true,
		}),
		provideNgxPrime({
			theme: {
				preset: PlayPreset,
				options: { darkModeSelector: "[data-mode='dark']" },
			},
		}),
		provideNgxTinymce(tinymceConfig),
		provideRouter(
			routes,
			withPreloading(PreloadAllModules),
			withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
		),
	],
};
