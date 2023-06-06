import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import {  Router  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Logeduser: boolean = localStorage.getItem('user') ? true: false;

  constructor(private oauthService: OAuthService, private http: HttpClient,private router: Router,) {
    this.configureOAuth();
  }

  private configureOAuth(): void {
    this.oauthService.configure({
      clientId: 'iURYHZV7lAO7I25JmLRBXdPTUyC9dl72',
      issuer: 'https://dev-hp82r6gefqsvpe4r.us.auth0.com',
      redirectUri: window.location.origin + '/',
      scope: 'openid profile email',
      tokenEndpoint: 'https://dev-hp82r6gefqsvpe4r.us.auth0.com/oauth/token'
    });

    this.oauthService.setupAutomaticSilentRefresh();
  }

   login(email: string, password: string): void {

    /* console.log(email, password);
    //this.oauthService.initImplicitFlow();
    this.od = this.oauthService.fetchTokenUsingPasswordFlow(email, password);
    console.log(this.od); */
    if(email == 'jozko@pietro.sk' && password == 'ULL!g_S_!@p7q5K') {
      this.router.navigate(['/']);
      this.Logeduser = true;
      localStorage.setItem('user', email)
    }else {
      localStorage.removeItem('user');
      this.Logeduser = false;
    }
  }

  logout(): void {
    
    localStorage.removeItem('user');
    this.Logeduser = false;
    this.router.navigate(['/login']);
    //this.oauthService.logOut();
  }


  isLogged() {
    return this.Logeduser;
  }
}
