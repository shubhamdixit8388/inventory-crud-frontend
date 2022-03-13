import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static positive(control: any): {'negativeValue': boolean} {
    if (+control.value <= 0) {
      return {negativeValue: true};
    } else {
      return null;
    }
  }
}
