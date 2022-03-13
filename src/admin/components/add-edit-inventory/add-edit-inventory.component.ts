import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Inventory} from '../../models/inventory.model';
import {ValidationService} from '../../../shared/services/validation.service';
import {InventoriesService} from '../../services/inventories.service';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.scss']
})
export class AddEditInventoryComponent implements OnInit {

  public form: FormGroup;
  public inventory = new Inventory();

  constructor(private location: Location, private formBuilder: FormBuilder,
              private inventoriesService: InventoriesService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, ValidationService.positive]]
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public addInventory(): void {
    console.log(this.inventory);
    this.inventoriesService.add(this.inventory).subscribe(inventory => {
      console.log(inventory);
    });
  }
}
