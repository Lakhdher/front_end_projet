import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';

import {
  RiAncientGateFill,
  RiHome2Fill,
  RemixIconModule,
  RiHeart3Line,
} from 'angular-remix-icon';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiHeart3Line,
};

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductCardComponent],
  imports: [BrowserModule, AppRoutingModule, RemixIconModule.configure(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
