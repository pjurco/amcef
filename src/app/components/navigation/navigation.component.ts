import { Component } from '@angular/core';
import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
