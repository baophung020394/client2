import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  
})
export class AdminLayoutModule { }
