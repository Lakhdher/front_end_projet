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
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { DefaultImagePipe } from './pages/profile/pipes/default-image.pipe';

import { ProductCardComponent } from './pages/products/UI/product-card/product-card.component';
import { SidebarFilterComponent } from './pages/products/sidebar-filter/sidebar-filter.component';



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
import { AutoCompleteComponent } from './pages/auto-complete/auto-complete.component';
import {NgOptimizedImage} from "@angular/common";

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
    HeaderComponent,
    ProductsComponent,
    WishlistComponent,
    NotFound404Component,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RemixIconModule.configure(icons),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HomeComponent,
    ProfileComponent,
    CartComponent,
    DefaultImagePipe,
    NgOptimizedImage
  ],
  providers: [
    authInterceptorProviders
  ],  bootstrap: [AppComponent],
})
export class AppModule {}


