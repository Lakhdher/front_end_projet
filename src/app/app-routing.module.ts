import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ProductsComponent } from './pages/products/products.component';
import {HomeComponent} from "./pages/home/home.component";
import { NotFound404Component }from "./pages/not-found404/not-found404.component"



const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFound404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
