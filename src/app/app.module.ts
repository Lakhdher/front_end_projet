import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {ProductsComponent} from './pages/products/products.component';
import {WishlistComponent} from './pages/wishlist/wishlist.component';
import {CartComponent} from './pages/cart/cart.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFound404Component} from './pages/not-found404/not-found404.component';
import {FooterComponent} from './pages/footer/footer.component';
import {LoginComponent} from './pages/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./interceptors/auth.interceptor";
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    WishlistComponent,
    CartComponent,
    NotFound404Component,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeComponent,
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
