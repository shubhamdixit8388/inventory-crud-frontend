import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.baseUrl, user);
  }
}
