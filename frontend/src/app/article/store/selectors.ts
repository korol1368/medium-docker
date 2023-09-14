import {createSelector} from '@ngrx/store';
import {ArticleStateInterface} from '../types/articleState.interface';
import {AppStateInterface} from '../../shared/types/appState.interface';

export const articleFeatureSelector = (state: AppStateInterface): ArticleStateInterface => state.article;

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);
