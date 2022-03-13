import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {ValidationService} from '../../../shared/services/validation.service';
import {InventoriesService} from '../../services/inventories.service';
import {QueryParamsConstants} from '../../../shared/constants/query-params.constant';
import {Inventory} from '../../models/inventory.model';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.scss']
})
export class AddEditInventoryComponent implements OnInit {

  public form: FormGroup;
  public inventoryId: number;
  public inventory = new Inventory();
  public isLoading: boolean;

  constructor(private location: Location, private formBuilder: FormBuilder, private router: Router,
              private inventoriesService: InventoriesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.inventoryId = +params.id;
        this.getInventory();
      }
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, ValidationService.positive]]
    });
  }

  public getInventory(): void {
    this.isLoading = true;
    this.inventoriesService.getById(this.inventoryId).subscribe(inventory => {
      this.inventory = inventory;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      throw Error(error.message);
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public addEditInventory(): void {
    this.isLoading = true;
    this.inventoryId ? this.editInventory() : this.addInventory();
  }

  public addInventory(): void {
    console.log(this.inventory);
    this.inventoriesService.add(this.inventory).subscribe(inventory => {
      console.log(inventory);
      this.isLoading = false;
      this.router.navigate([QueryParamsConstants.admin, QueryParamsConstants.inventories]).then();
    }, error => {
      this.isLoading = false;
      throw Error(error.message);
    });
  }

  public editInventory(): void {
    console.log(this.inventory);
    this.inventoriesService.update(this.inventory).subscribe(inventory => {
      console.log(inventory);
      this.isLoading = false;
      this.router.navigate([QueryParamsConstants.admin, QueryParamsConstants.inventories]).then();
    }, error => {
      this.isLoading = false;
      throw Error(error.message);
    });
  }
}
