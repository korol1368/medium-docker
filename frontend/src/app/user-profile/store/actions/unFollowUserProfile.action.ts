import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {UserProfileInterface} from '../../types/userProfile.interface';

export const unFollowUserProfileAction = createAction(ActionTypes.UNFOLLOW_USER_PROFILE, props<{username: string}>());

export const unFollowUserProfileSuccessAction = createAction(
  ActionTypes.UNFOLLOW_USER_PROFILE_SUCCESS,
  props<{userProfile: UserProfileInterface}>()
);

export const unFollowUserProfileFailureAction = createAction(ActionTypes.UNFOLLOW_USER_PROFILE_FAILURE);
