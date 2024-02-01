import { Component, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsyncPipe, NgClass, NgForOf, NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { OverlayService } from 'src/app/services/overlay.service';
import { Product } from 'src/app/models/product';
import { ProductQuickViewComponent } from '../products/products-quick-view/products-quick-view.component';
import { AppModule } from 'src/app/app.module';

export interface Tile {
  cols: number;
  rows: number;
  image: string;
  title?: string;
  text?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    NgForOf,
    NgClass,
    MatButtonModule,
    NgStyle,
    AsyncPipe,
  ],
})
export class HomeComponent {
  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;
  activeProduct$: Observable<any> = this.overlay.activeProduct$;

  products$: Observable<any[]>;
  constructor(
    private productsService: ProductsService,
    private overlay: OverlayService
  ) {
    this.products$ = this.productsService.getProducts(4, 3.75);
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }

  selectProduct(product: Product) {
    this.productQuickViewRef?.open();
    this.overlay.activeProductSubject.next(product);
  }

  addToCart($event: any) {
    throw new Error('Method not implemented.');
  }
}
