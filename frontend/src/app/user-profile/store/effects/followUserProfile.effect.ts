import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserProfileInterface} from '../../types/userProfile.interface';
import {UserProfileService} from '../../services/user-profile.service';
import {
  followUserProfileAction,
  followUserProfileFailureAction,
  followUserProfileSuccessAction,
} from '../actions/followUserProfile.action';

@Injectable()
export class FollowUserProfileEffect {
  followUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followUserProfileAction),
      switchMap(({username}) => {
        return this.userProfileService.followUserProfile(username).pipe(
          map((userProfile: UserProfileInterface) => {
            return followUserProfileSuccessAction({userProfile});
          }),

          catchError(() => {
            return of(followUserProfileFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
