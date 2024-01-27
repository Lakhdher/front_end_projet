import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    WishlistComponent,
    CartComponent,
    HomeComponent,
    NotFound404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
