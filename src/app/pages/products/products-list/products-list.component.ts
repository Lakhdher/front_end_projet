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
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent  {

  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;

  @Input()
  products: Product[] = [];

  activeProduct$: Observable<any> = this.overlay.activeProduct$;

  constructor(private readonly overlay: OverlayService,private cartService:CartService) {
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }
  addToCart($event: any) {
    this.cartService.setProduct($event);
  }
  openQuickView(product: any) {
    this.productQuickViewRef?.open();
    this.overlay.activeProductSubject.next(product);
  }
}
