import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { AddEditInventoryComponent } from './components/add-edit-inventory/add-edit-inventory.component';
import {MatButtonModule} from '@angular/material/button';
import {InventoriesService} from './services/inventories.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

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
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    InventoriesService
  ]
})
export class AdminModule { }
