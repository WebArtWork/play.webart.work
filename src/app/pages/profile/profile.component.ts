import {
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FormField, form, submit } from '@angular/forms/signals';
import { FileComponent } from '@wawjs/ngx-bos';
import { UserService } from '@wawjs/ngx-bos';
import { EmitterService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { AchievementService } from '../../features/achievement/achievement.service';
import { AchievementShortComponent } from '../../features/achievement/achievement-short/achievement-short.component';
import { FollowService } from '../../features/follow/follow.service';
import { GameService } from '../../features/game/game.service';
import { GameShortComponent } from '../../features/game/game-short/game-short.component';
import { PlayerService } from '../../features/player/player.service';
import { PlayerShortComponent } from '../../features/player/player-short/player-short.component';
import { WorldService } from '../../features/world/world.service';
import { WorldShortComponent } from '../../features/world/world-short/world-short.component';
import { ShareProfileComponent } from '../../shared/share-profile/share-profile.component';
import { ProfileModel } from './profile.interface';
import { profileSchema } from './profile.schema';

@Component({
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		TextareaModule,
		FileComponent,
		TranslateDirective,
		WorldShortComponent,
		GameShortComponent,
		AchievementShortComponent,
		PlayerShortComponent,
		ShareProfileComponent,
	],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent {
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);
	readonly playerService = inject(PlayerService);
	readonly followService = inject(FollowService);
	readonly worldService = inject(WorldService);
	readonly gameService = inject(GameService);
	readonly achievementService = inject(AchievementService);

	private readonly _route = inject(ActivatedRoute);
	private readonly _emitterService = inject(EmitterService);

	private readonly _initialProfile = computed<ProfileModel>(() => {
		const u = this.userService.user();
		return {
			name: u.name || '',
			phone: u.phone || '',
			bio: u.bio || '',
		};
	});

	readonly profileModel = signal<ProfileModel>(this._initialProfile());
	readonly profileForm = form(this.profileModel, profileSchema);
	readonly isSubmitDisabled = computed(() => this.profileForm().invalid());

	private readonly _routePlayerId = toSignal(this._route.paramMap.pipe(map((p) => p.get('playerId'))), { initialValue: null });

	readonly isOwnProfile = computed(() => !this._routePlayerId() || this._routePlayerId() === this.playerService.currentPlayerId());

	readonly viewedPlayer = computed(() => {
		const id = this._routePlayerId();
		return id ? (this.playerService.getById(id) ?? this.playerService.currentPlayer()) : this.playerService.currentPlayer();
	});

	readonly favoriteWorlds = computed(() =>
		this.viewedPlayer().favoriteWorldIds.map((id) => this.worldService.getById(id)).filter((w) => !!w),
	);
	readonly favoriteGames = computed(() =>
		this.viewedPlayer().favoriteGameIds.map((id) => this.gameService.getById(id)).filter((g) => !!g),
	);
	readonly followedWorlds = computed(() =>
		this.viewedPlayer().followedWorldIds.map((id) => this.worldService.getById(id)).filter((w) => !!w),
	);
	readonly followedGames = computed(() =>
		this.viewedPlayer().followedGameIds.map((id) => this.gameService.getById(id)).filter((g) => !!g),
	);
	readonly friends = computed(() =>
		this.viewedPlayer().friendIds.map((id) => this.playerService.getById(id)).filter((p) => !!p),
	);
	readonly recentlyPlayed = computed(() =>
		this.viewedPlayer().recentlyPlayedGameIds.map((id) => this.gameService.getById(id)).filter((g) => !!g),
	);
	readonly achievements = computed(() =>
		this.viewedPlayer().achievementIds.map((id) => this.achievementService.getById(id)).filter((a) => !!a),
	);

	constructor() {
		this._emitterService
			.onComplete('us.user')
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this.profileModel.set(this._initialProfile());
				this.profileForm().reset();
			});
	}

	isFollowingPlayer(): boolean {
		return this.followService.isFollowing('player', this.viewedPlayer()._id);
	}

	toggleFollowPlayer(): void {
		this.followService.toggleFollow('player', this.viewedPlayer()._id);
	}

	shareUrl(): string {
		return `${location.origin}/profile/${this.viewedPlayer()._id}`;
	}

	wFormSubmit(): void {
		submit(this.profileForm, (formTree) => {
			this.userService.user.set({
				...this.userService.user(),
				...(formTree().value() as ProfileModel),
			});

			this.userService.updateMe();
			return Promise.resolve();
		});
	}

	updateThumb(thumb: string): void {
		this.userService.user.set({
			...this.userService.user(),
			thumb,
		});

		this.userService.updateMe();
	}
}
