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
  { path: 'favorites', component: WishlistComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFound404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
