import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap, tap, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

import {
  updateArticleSuccessAction,
  updateArticleAction,
  updateArticleFailureAction,
} from '../actions/updateArticle.action';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {EditArticleService} from '../../services/edit-article.service';

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleInput}) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(updateArticleFailureAction({errors: errorResponse.error.errors}));
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
