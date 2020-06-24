import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ParentProductInfoComponent } from './parent-product-info/parent-product-info.component';

// http://localhost:4200/ + path
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'checkout', component: CartComponent },
  { path: 'products/:productId', component: ParentProductInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
