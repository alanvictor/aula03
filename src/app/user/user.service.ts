import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, APIUserFactory, APIUser } from './user';
import { Observable } from 'rxjs';

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

  // url = 'https://backendcombacon.herokuapp.com/user';
  url = 'api/user';
  // url = 'api/usuario';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  create(user: User): Observable<any> {
    const apiPayload = APIUserFactory(user);
    return this.http.post<APIUser>(this.url, apiPayload, httpOptions);
  }
}
