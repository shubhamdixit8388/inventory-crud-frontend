import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {ValuesConstant} from '../../constants/values.constant';
import {IconConstant} from '../../constants/icon.constant';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  public valuesConstants = ValuesConstant;

  constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public configurationData: any) {
  }

  get getIcon(): string {
    switch (this.configurationData.snackType) {
      case ValuesConstant.success:
        return IconConstant.done;
      case ValuesConstant.error:
        return IconConstant.error;
      case ValuesConstant.warn:
        return IconConstant.warning;
      case ValuesConstant.info:
        return IconConstant.info;
    }
  }
}
