import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from 'src/app/models/product';
import {ProductsService} from 'src/app/services/products.service';
import {ProductQuickViewComponent} from '../products/products-quick-view/products-quick-view.component';
import {OverlayService} from 'src/app/services/overlay.service';
import {CartService} from 'src/app/services/cart.service';
import {WishlistCardComponent} from './wishlist-card/wishlist-card.component';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  standalone: true,
  imports: [ProductQuickViewComponent, WishlistCardComponent, AsyncPipe, CommonModule]
})
export class WishlistComponent {
  products: any[] = [];
  products$: Observable<Product[]>;
  @ViewChild(ProductQuickViewComponent, {static: true})
  productQuickViewRef?: ProductQuickViewComponent;
  activeProduct$: Observable<any> = this.overlay.activeProduct$;

  constructor(
    private readonly productsService: ProductsService,
    private readonly overlay: OverlayService,
    private readonly cartService: CartService
  ) {
    this.products$ = this.productsService.getWishlist();
    this.products$.subscribe((res) => {
      this.products = res;
    });
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }

  deleteFromWishlist(p: Product) {
    this.productsService.deleteFromWishlist(p.id as number).subscribe(
      (res) => {
        this.products$ = this.productsService.getWishlist();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openQuickView(product: Product) {
    this.productQuickViewRef?.open();
    this.overlay.activeProductSubject.next(product);
  }

  addToCart($event: any) {
    this.cartService.setProduct($event);
  }
}
