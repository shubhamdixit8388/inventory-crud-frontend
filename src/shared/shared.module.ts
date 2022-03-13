import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackBarComponent} from './components/snackbar/snack-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './components/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    SnackBarComponent,
    SearchComponent,
    ConfirmationDialogComponent
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
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule {
}
