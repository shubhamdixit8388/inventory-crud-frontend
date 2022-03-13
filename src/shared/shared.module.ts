import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackBarComponent} from './components/snackbar/snack-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './components/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SnackBarComponent,
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
