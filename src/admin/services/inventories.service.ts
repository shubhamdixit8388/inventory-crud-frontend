import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ApiConstant} from '../../shared/constants/api.constant';
import {ListWrapper} from '../../shared/models/list-wrapper.model';
import {Filter} from '../../shared/models/filter.model';
import {QueryParamsConstants} from '../../shared/constants/query-params.constant';
import {Inventory} from '../models/inventory.model';

@Injectable()
export class InventoriesService {

  static convertToQueryParams(filter: Filter): { params: HttpParams } {
    return {
      params: new HttpParams()
        .set(QueryParamsConstants.pageNumber, filter.pageNumber.toString())
        .set(QueryParamsConstants.pageSize, filter.pageSize.toString())
        .set(QueryParamsConstants.searchString, filter.searchString ? filter.searchString : '')
        .set(QueryParamsConstants.sortBy, filter.sortBy ? filter.sortBy : '')
        .set(QueryParamsConstants.orderBy, filter.orderBy ? filter.orderBy : '')
    };
  }

  constructor(private httpClient: HttpClient) { }

  public getAll(filter: Filter): Observable<ListWrapper> {
    return this.httpClient.get<ListWrapper>(environment.baseUrl + ApiConstant.inventories,
      InventoriesService.convertToQueryParams(filter));
  }

  public add(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(environment.baseUrl + ApiConstant.inventories,
      inventory);
  }
}
