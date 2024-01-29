import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/UI/product-card/product-card.component';
import { SidebarFilterComponent } from './pages/products/sidebar-filter/sidebar-filter.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  RiAncientGateFill,
  RiHome2Fill,
  RemixIconModule,
  RiHeart3Line,
  RiShoppingCart2Fill,
  RiCloseLine,
} from 'angular-remix-icon';
import { AccordionComponent } from './pages/products/UI/accordion/accordion.component';
import { ButtonComponent } from './pages/products/UI/button/button.component';
import { TogglePipe } from './pages/products/UI/accordion/pipe/toggle.pipe';
import { AccordionItem } from './pages/products/UI/accordion/directives/accordion-item.directive';
import { CheckboxComponent } from './pages/products/UI/checkbox/checkbox.component';
import { AccordionContent } from './pages/products/UI/accordion/directives/accordion-content.directive';
import { AccordionHeader } from './pages/products/UI/accordion/directives/accordion-header.directive';
import { AccordionTitle } from './pages/products/UI/accordion/directives/accordion-title.directive';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductQuickViewComponent } from './pages/products/products-quick-view/products-quick-view.component';
import { SideSheetComponent } from './pages/products/UI/side-sheet/side-sheet.component';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiHeart3Line,
  RiShoppingCart2Fill,
  RiCloseLine,
};

@NgModule({
  declarations: [
    AppComponent,
    AccordionItem,
    ProductsComponent,
    ProductCardComponent,
    SidebarFilterComponent,
    AccordionComponent,
    ButtonComponent,
    TogglePipe,
    CheckboxComponent,
    AccordionContent,
    AccordionHeader,
    AccordionTitle,
    ProductsListComponent,
    ProductQuickViewComponent,
    SideSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RemixIconModule.configure(icons),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
