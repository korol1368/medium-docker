import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {UserProfileInterface} from '../../types/userProfile.interface';

export const followUserProfileAction = createAction(ActionTypes.FOLLOW_USER_PROFILE, props<{username: string}>());

export const followUserProfileSuccessAction = createAction(
  ActionTypes.FOLLOW_USER_PROFILE_SUCCESS,
  props<{userProfile: UserProfileInterface}>()
);

export const followUserProfileFailureAction = createAction(ActionTypes.FOLLOW_USER_PROFILE_FAILURE);
