import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {SnackBarComponent} from './snack-bar.component';
import {ValuesConstant} from '../../constants/values.constant';

@Injectable()
export class SnackBarService {
    panelClass: string;

    constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

    public success(message: string, value?: string): void {
        this.panelClass = 'snackbar-success';
        this.showSnackBar(ValuesConstant.success, message, ValuesConstant.success, value);
    }

    public error(message: string): void{
        this.panelClass = 'snackbar-error';
        this.showSnackBar(ValuesConstant.error, message, ValuesConstant.error);
    }

    public  info(message: string): void {
        this.panelClass = 'snackbar-info';
        this.showSnackBar(ValuesConstant.info, message, ValuesConstant.information);
    }

    public warning(message: string): void{
        this.panelClass = 'snackbar-warning';
        this.showSnackBar(ValuesConstant.warn, message, ValuesConstant.warning);
    }

    private showSnackBar(snackType: any, message: string, title: string, value?: string): void{
      this.zone.run(() => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: snackType === ValuesConstant.error ? 0 : ValuesConstant.toasterCloseTimer,
          panelClass: [this.panelClass],
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          data: {message, snackType, title, value}
        });
      });
    }
}
