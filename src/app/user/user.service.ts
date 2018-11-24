import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, APIUserFactory, APIUser } from './user';
import { Observable, of } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../auth/services/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': '*/*',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/usuario';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    // private oauth: OAuthService
  ) { }

  create(user: User): Observable<any> {
    const apiPayload = APIUserFactory(user);
    return this.http.post<APIUser>(this.url, apiPayload, httpOptions);
  }

  get(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.auth.getAuthorizationHeader()
    });

    return this.http.get(this.url, { headers });
  }
}
