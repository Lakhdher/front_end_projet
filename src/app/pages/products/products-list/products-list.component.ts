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

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent  {
  promises = promises;
  addToCart($event: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;
  private readonly activeProductSubject = new Subject<any>();
  readonly activeProduct$: Observable<any> = this.activeProductSubject
    .asObservable()
    .pipe(
      filter((product) => !!product),
      map((product) => {
        return {
          ...product,
          promises: this.promises,
        };
      })
    );

  @Input()
  products: Product[] = [];

  constructor(private readonly overlay: OverlayService) {
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }

  openQuickView(product: any) {
    this.productQuickViewRef?.open();
    this.activeProductSubject.next(product);
  }
}
