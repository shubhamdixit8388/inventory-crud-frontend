import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [AuthService]
})
export class AuthModule {
}
