import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {FooterComponent} from './pages/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './interceptors/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultImagePipe} from './pages/profile/pipes/default-image.pipe';

import {
  RemixIconModule,
  RiAncientGateFill,
  RiCloseLine,
  RiDeleteBin5Line,
  RiHeart3Fill,
  RiHeart3Line,
  RiHome2Fill,
  RiShoppingCart2Fill,
} from 'angular-remix-icon';
import {NgOptimizedImage} from '@angular/common';
import {EditProfileDialog} from "./pages/profile/dialog/EditProfileDialog/dialog.component";
import { DeleteProfileDialogComponent } from './pages/profile/dialog/deleteProfileDialog/delete-profile-dialog/delete-profile-dialog.component';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiHeart3Line,
  RiShoppingCart2Fill,
  RiCloseLine,
  RiDeleteBin5Line,
  RiHeart3Fill,
};

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemixIconModule.configure(icons),
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FooterComponent,
    HeaderComponent,
    DefaultImagePipe,
    NgOptimizedImage,
    BrowserAnimationsModule,
    EditProfileDialog, DeleteProfileDialogComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
