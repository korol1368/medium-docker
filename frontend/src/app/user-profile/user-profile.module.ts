import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import {UserProfileService} from './services/user-profile.service';
import {EffectsModule} from '@ngrx/effects';
import {GetUserProfileEffect} from './store/effects/getUserProfile.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {FeedModule} from '../shared/modules/feed/feed.module';
import {FollowUserProfileEffect} from './store/effects/followUserProfile.effect';
import {UnFollowUserProfileEffect} from './store/effects/unFollowUserProfile.effect';

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profile/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect, FollowUserProfileEffect, UnFollowUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
