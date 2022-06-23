import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


@NgModule({
  declarations: [
    AdminComponent,
    SuppliersComponent
  ],
  imports: [
    CommonModule,
    RhRoutingModule
  ]
})
export class RhModule { }
