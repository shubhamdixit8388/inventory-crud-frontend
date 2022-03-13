import { Component, OnInit } from '@angular/core';
import {InventoriesService} from '../../services/inventories.service';
import {Inventory} from '../../models/inventory.model';
import {ValuesConstant} from '../../../shared/constants/values.constant';
import {MatTableDataSource} from '@angular/material/table';
import {Filter} from '../../../shared/models/filter.model';
import {Sort} from '@angular/material/sort';
import {PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, Router} from '@angular/router';
import {ListWrapper} from '../../../shared/models/list-wrapper.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  public listWrapper: ListWrapper;
  public valuesConstant = ValuesConstant;
  public dataSource: MatTableDataSource<Inventory>;
  public filter = new Filter();
  public isLoading: boolean;

  constructor(private inventoriesService: InventoriesService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filter = new Filter(params);
      this.getList();
    });
  }

  protected getList(): void {
    this.isLoading = true;
    this.inventoriesService.getAll(this.filter).subscribe(result => {
      this.listWrapper = result;
      this.dataSource = new MatTableDataSource<Inventory>(this.listWrapper.inventories);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      throw  Error(error);
    });
  }

  public onSortChange(event: Sort): void {
    this.filter.sortBy = event.active;
    this.filter.orderBy = event.direction;
    this.onFilterChange();
  }

  public onPageChange(event: PageEvent): void {
    event.pageIndex += 1;
    this.filter.pageNumber = event.pageIndex;
    this.filter.pageSize = event.pageSize;
    this.onFilterChange();
  }

  public onSearch(searchString: string): void {
    this.filter.searchString = searchString;
    this.filter.pageNumber = 1;
    this.onFilterChange();
  }

  public onFilterChange(): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: this.filter,
      queryParamsHandling: 'merge',
      skipLocationChange: false
    }).then();
  }

  public onMenuAction(action: string, inventoryIndex: number): void {
    switch (action) {
      case ValuesConstant.actions.edit:
        this.router.navigate([ValuesConstant.actions.edit.toLowerCase(),
            this.listWrapper.inventories[inventoryIndex].id],
          {relativeTo: this.activatedRoute}).then();
        break;
      case ValuesConstant.actions.delete:
        break;
    }
  }
}
