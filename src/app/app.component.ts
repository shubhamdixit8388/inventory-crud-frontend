import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-crud';

  constructor(public router: Router, private authService: AuthService) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['auth/login']).then();
    }
  }
}
