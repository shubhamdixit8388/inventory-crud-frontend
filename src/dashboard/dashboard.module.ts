import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }

];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DashboardModule { }
