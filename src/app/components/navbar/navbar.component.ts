import { Component } from '@angular/core';
import {ValuesConstant} from '../../../shared/constants/values.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  public logout(): void {
    localStorage.removeItem(ValuesConstant.accessToken);
    this.router.navigate(['auth/login']).then();
  }
}
