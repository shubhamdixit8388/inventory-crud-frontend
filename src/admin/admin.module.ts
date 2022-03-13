import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { AddEditInventoryComponent } from './components/add-edit-inventory/add-edit-inventory.component';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'inventories',
        component: InventoryListComponent
      },
      {
        path: 'inventories/add/:id',
        component: AddEditInventoryComponent
      },
      {
        path: 'inventories/edit/:id',
        component: AddEditInventoryComponent
      }
    ]
  }

];

@NgModule({
  declarations: [AdminComponent, InventoryListComponent, AddEditInventoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatButtonModule
  ]
})
export class AdminModule { }
