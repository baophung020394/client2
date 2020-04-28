import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ParterShipComponent } from './parter-ship/parter-ship.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        ReactiveFormsModule,
        NgSelectModule
    ],
    declarations: [
        NavbarComponent, 
        SidebarComponent, PageNotFoundComponent, ProductsComponent, ProductDetailComponent, ParterShipComponent, UsersComponent, LoginComponent
    ],
    exports: [
        NavbarComponent, 
        SidebarComponent
    ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true
//     }
//   ]
})
export class ComponentsModule {}
