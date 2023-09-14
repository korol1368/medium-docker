import {createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../types/appState.interface';
import {PopularTagsStateInterface} from '../types/popularTagsState.Interface';

export const popularTagsFeatureSelector = (state: AppStateInterface): PopularTagsStateInterface => state.popularTags;

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
);
