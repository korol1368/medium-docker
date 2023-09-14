import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserProfileInterface} from '../types/userProfile.interface';
import {environment} from '../../../environments/environment';
import {GetUserProfileResponseInterface} from '../types/getUserProfileResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get(url).pipe(map((response: GetUserProfileResponseInterface) => response.profile));
  }

  followUserProfile(username: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${username}/follow`;
    return this.http.post(url, username).pipe(map((response: GetUserProfileResponseInterface) => response.profile));
  }

  unFollowUserProfile(username: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${username}/follow`;
    return this.http.delete(url).pipe(map((response: GetUserProfileResponseInterface) => response.profile));
  }
}
