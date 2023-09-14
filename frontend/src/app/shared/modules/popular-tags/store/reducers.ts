import {PopularTagsStateInterface} from '../types/popularTagsState.Interface';
import {Action, createReducer, on} from '@ngrx/store';
import {getPopularTagsAction, getPopularTagsSuccessAction} from './actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(getPopularTagsSuccessAction, (state: PopularTagsStateInterface, action) => ({
    ...state,
    isLoading: false,
    error: null,
    data: action.popularTags,
  })),
  on(getPopularTagsAction, (state: PopularTagsStateInterface, action) => ({
    ...state,
    isLoading: false,
  }))
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
