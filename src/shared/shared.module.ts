import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackBarComponent} from './components/snackbar/snack-bar.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SharedModule {
}
