import {ValuesConstant} from '../constants/values.constant';
import {Params} from '@angular/router';

export class Filter {
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  orderBy: string;
  searchString: string;

  constructor(params?: Params) {
    this.pageNumber = params && params.pageNumber ? Number(params.pageNumber) : ValuesConstant.DEFAULT_PAGE_NUMBER;
    this.pageSize = params && params.pageSize ? Number(params.pageSize) : ValuesConstant.DEFAULT_PAGE_SIZE;
    this.searchString = params && params.searchString && params.searchString !== '' ? params.searchString : null;
    this.sortBy = params && params.sortBy ? params.sortBy : null;
    this.orderBy = params && params.orderBy ? params.orderBy : null;
  }
}
