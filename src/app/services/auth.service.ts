import { Injectable } from '@angular/core';
import { IAuth } from '../interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API = 'http://localhost:3000';
  auth!: IAuth;
  constructor(private http: HttpClient) {}

  signUp(data: IAuth): Observable<IAuth> {
    return this.http.post<IAuth>(`${this.API}/signup`, data);
  }

  signIn(data: IAuth): Observable<IAuth> {
    return this.http.post<IAuth>(`${this.API}/signin`, data);
  }
}
