import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {PopularTagType} from '../../../types/popularTag.type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment.development';
import {GetPopularTagsResponseInterface} from '../types/getPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;

    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
