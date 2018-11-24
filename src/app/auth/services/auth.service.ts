import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginOptions } from '../domain/login.options';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api/oauth/token';
  access_token = '';

  constructor(
    private oauth: OAuthService,
    private http: HttpClient,
  ) { }

  login(login: LoginOptions): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Basic ' + btoa(this.oauth.clientId + ':' + this.oauth.dummyClientSecret)
    // });
    // this.oauth.scope = 'password';

    // return from(
    //   this.oauth.fetchTokenUsingPasswordFlow(login.email, login.senha, headers)
    // );

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('frontfront:frontend')
      })
    };

    const data = new FormData();
    data.append('username', login.email);
    data.append('password', login.senha);
    data.append('grant_type', 'password');

    return this.http
      .post(this.url, data, httpOptions)
      .pipe(
        map(tokenDTO => {
          this.access_token = tokenDTO['access_token'];
          return tokenDTO;
        })
      );
  }

  getAuthorizationHeader() {
    return `Bearer ${this.access_token}`;
  }

  isUserLogged() {
    return !!this.access_token;
  }
}
