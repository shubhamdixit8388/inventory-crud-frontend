import { ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {SnackBarService} from '../../shared/components/snackbar/snack-bar.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private snackBarService: SnackBarService) {
  }

  public handleError(error): void {
    if (!(error instanceof HttpErrorResponse)) {
      if (error.message) {
        this.snackBarService.error(error.message);
      } else {
        this.snackBarService.error(error);
      }
    } else {
      this.snackBarService.error(error.message);
    }
    console.error(error);
  }
}
