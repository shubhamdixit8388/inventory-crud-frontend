import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  }

];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class AdminModule { }
