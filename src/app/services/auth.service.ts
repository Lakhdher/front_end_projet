import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import { environment } from "../../environments/environment.development";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
   SignInURL=environment.backend_url+"/auth/sign-in";
    SignUpURL=environment.backend_url+"/auth/sign-up";

  signIn(email: string, password: string) {
    return this.http.post<any>(this.SignInURL, {email, password})
      .pipe(map(res => this.setSession((res))));
  }

  private setSession(authResult:any) {
    const expiresAt = authResult.expiresIn + Date.now();
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return Date.now() < this.getExpiration();
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at")??'0';
    return JSON.parse(expiration);
  }

  register(email:string, username:string, password:string) {
    return this.http.post<any>(this.SignUpURL, {email, username, password})
      .pipe(map(res => this.setSession((res))));

  }
}
