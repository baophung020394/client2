import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductDetailComponent } from 'src/app/components/products/product-detail/product-detail.component';
import { ParterShipComponent } from 'src/app/components/parter-ship/parter-ship.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { CreateComponent } from 'src/app/components/products/create/create.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-create', component: CreateComponent },
  { path: 'parter-ship', component: ParterShipComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: AdminLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
