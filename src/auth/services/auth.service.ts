import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {ValuesConstant} from '../../shared/constants/values.constant';
import {ApiConstant} from '../../shared/constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.baseUrl + ApiConstant.login, user);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(ValuesConstant.accessToken) && localStorage.getItem(ValuesConstant.accessToken) !== '';
  }
}
