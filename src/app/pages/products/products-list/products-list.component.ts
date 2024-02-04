import {
  AfterContentInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductQuickViewComponent } from '../products-quick-view/products-quick-view.component';
import { OverlayService } from '../../../services/overlay.service';
import { Observable, Subject, filter, map } from 'rxjs';
import { promises } from '../mock_data/promises';
import { SPECIFICATION_KEYS } from '../mock_data/specifications';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { CartService } from '../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;

  @Input()
  products: Product[] = [];

  activeProduct$: Observable<any> = this.overlay.activeProduct$;

  constructor(
    private readonly overlay: OverlayService,
    private cartService: CartService,
    private productService: ProductsService,
    private toaster: ToastrService
  ) {
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }
  addToCart(product: Product) {
    this.cartService.setProduct(product);
  }
  openQuickView(product: Product) {
    this.productQuickViewRef?.open();
    this.overlay.activeProductSubject.next(product);
  }

  addToWishlist(product: Product) {
    return this.productService.addToWishlist(product.id as number).subscribe(
      (res) => {
        console.log(res);
        if (res === 'Added to Wishlist Successfully!') {
          this.toaster.success('Product added to wishlist');
        } else {
          this.toaster.error('Product already in wishlist');
        }
      },
      (err) => {
        this.toaster.error('API Error, Please try again later.');
      }
    );
  }
}
