import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, tap} from 'rxjs';
import {environment} from '../../environments/environment.development';

// user model
export interface IUser {
  email: string;
  id: string;
}

// auth model
export interface IAuthInfo {
  payload?: IUser;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  SignInURL = environment.backend_url + '/auth/sign-in';
  SignUpURL = environment.backend_url + '/auth/sign-up';
  private isLoggedInSource = new BehaviorSubject<boolean>(
    // this.getExpiration() > Date.now()
    localStorage.getItem('id_token') != null
  );
  isLoggedIn$ = this.isLoggedInSource.asObservable();
  private isLoggedOutSource = new BehaviorSubject<boolean>(
    // this.getExpiration() < Date.now()
    localStorage.getItem('id_token') == null
  );
  isLoggedOut$ = this.isLoggedOutSource.asObservable();

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string) {
    return this.http.post<any>(this.SignInURL, {email, password}).pipe(
      tap((res) => {
        this.setSession(res);
        this.isLoggedInSource.next(true);
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.isLoggedInSource.next(false);
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at') ?? '0';
    return JSON.parse(expiration);
  }

  register(email: string, username: string, password: string) {
    return this.http.post<any>(this.SignUpURL, {email, username, password});
    // .pipe(map(res => {
    //   this.setSession((res));
    // }));
  }

  private setSession(authResult: any) {
    const expiresAt = Date.now() + 7200;
    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
