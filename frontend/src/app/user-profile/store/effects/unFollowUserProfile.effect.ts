import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserProfileInterface} from '../../types/userProfile.interface';
import {UserProfileService} from '../../services/user-profile.service';
import {
  unFollowUserProfileAction,
  unFollowUserProfileFailureAction,
  unFollowUserProfileSuccessAction,
} from '../actions/unFollowUserProfile.action';

@Injectable()
export class UnFollowUserProfileEffect {
  unFollowUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unFollowUserProfileAction),
      switchMap(({username}) => {
        return this.userProfileService.unFollowUserProfile(username).pipe(
          map((userProfile: UserProfileInterface) => {
            return unFollowUserProfileSuccessAction({userProfile});
          }),

          catchError(() => {
            return of(unFollowUserProfileFailureAction());
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
