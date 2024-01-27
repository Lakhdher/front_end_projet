import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/UI/product-card/product-card.component';
import { SidebarFilterComponent } from './pages/products/UI/sidebar-filter/sidebar-filter.component';

import {
  RiAncientGateFill,
  RiHome2Fill,
  RemixIconModule,
  RiHeart3Line,
  RiShoppingCart2Fill,
} from 'angular-remix-icon';
import { AccordionComponent } from './pages/products/UI/accordion/accordion.component';
import { AccordionItemComponent } from './pages/products/UI/accordion-item/accordion-item.component';
import { ButtonComponent } from './pages/products/UI/button/button.component';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiHeart3Line,
  RiShoppingCart2Fill
};

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    SidebarFilterComponent,
    AccordionComponent,
    AccordionItemComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RemixIconModule.configure(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
