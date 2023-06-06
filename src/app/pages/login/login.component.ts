import { Component } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  

  onSubmit() {
    this.auth.login(this.email, this.password);
  }
}
