import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false;
  user: User = null;
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/people';

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}/login`,
        {

        },
        httpOptions
      ).toPromise();
      console.log('asd');
      this.isLoggedIn =true;
      this.user = user;
      return Promise.resolve(true);
    } catch (e) {
      console.log('hiba', e);
      return Promise.resolve(false);
    }
  }
    
  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.user = null;
  }
}
