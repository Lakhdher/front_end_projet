import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {WishlistComponent} from './pages/wishlist/wishlist.component';
import {ProductsComponent} from './pages/products/products.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFound404Component} from './pages/not-found404/not-found404.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {authGuard} from './guards/auth.guard';
import {ProfileComponent} from './pages/profile/profile.component';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {DeliveryComponent} from "./pages/checkout/delivery/delivery.component";
import {PickUpComponent} from "./pages/checkout/pick-up/pick-up.component";

const routes: Routes = [

  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'favorites', component: WishlistComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent },
  {
    path: 'checkout', component: CheckoutComponent, children: [
      {path: 'delivery', component: DeliveryComponent},
      {path: 'pickup', component: PickUpComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
