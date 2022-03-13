import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {SnackBarComponent} from './components/snackbar/snack-bar.component';
import {SearchComponent} from './components/search/search.component';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';

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
