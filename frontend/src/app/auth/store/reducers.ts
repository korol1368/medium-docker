import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.action';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action';
import {updateCurrentUserSuccessAction} from './actions/updateCurrentUser.action';
import {logoutAction} from './actions/sync.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(loginAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(loginSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(loginFailureAction, (state: AuthStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(getCurrentUserAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailureAction, (state: AuthStateInterface) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  })),
  on(updateCurrentUserSuccessAction, (state: AuthStateInterface, action) => ({
    ...state,
    currentUser: action.currentUser,
  })),
  on(
    logoutAction,
    (): AuthStateInterface => ({
      ...initialState,
      isLoggedIn: false,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
