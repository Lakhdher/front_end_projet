import { Component, Input, ViewChild } from '@angular/core';
import { ProductQuickViewComponent } from '../products-quick-view/products-quick-view.component';
import { OverlayService } from '../service/overlay.service';
import { Observable, Subject, filter, map } from 'rxjs';
import { promises } from '../mock_data/promises';
import { SPECIFICATION_KEYS } from '../mock_data/specifications';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  promises = promises;
  addToCart($event: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;
  @Input()
  products?: any[];
  private readonly activeProductSubject = new Subject<any>();
  readonly activeProduct$: Observable<any> = this.activeProductSubject
    .asObservable()
    .pipe(
      filter((product) => !!product),
      map((product) => {
        const cat = product.category
        const kind = "Product" + cat;
        const specificationKeys = SPECIFICATION_KEYS[kind as keyof typeof SPECIFICATION_KEYS];
        const specifications = specificationKeys.map(({ key, label }) => {
          return {
            label: label,
            // @ts-ignore
            value: product[key],
          };
        });
        return {
          ...product,
          promises: this.promises,
          specifications: specifications,
        };
      })
    );
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
