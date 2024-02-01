import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { ProductQuickViewComponent } from '../products/products-quick-view/products-quick-view.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('productSearchInput', { static: true })
  productSearchInput!: ElementRef;
  @ViewChild(ProductQuickViewComponent, { static: true })
  productQuickViewRef?: ProductQuickViewComponent;
  activeProduct$: Observable<any> = this.overlay.activeProduct$;
  searchResults: Product[] | undefined;
  showResults: boolean = false;
  constructor(
    private productsService: ProductsService,
    private toaster: ToastrService,
    private overlay: OverlayService
  ) {
    this.searchResults = [];
    overlay.clickedOutside$.subscribe(() => {
      this.productQuickViewRef?.close();
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.productSearchInput.nativeElement.contains(event.target)) {
      this.showResults = false;
    }
  }

  toggleResults(): void {
    this.showResults = !this.showResults;
  }

  ngOnInit(): void {
    fromEvent(this.productSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter((res: string) => res.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchTerm: string) =>
          this.productsService.getSearchedProducts(searchTerm)
        )
      )
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.searchResults = data;
        },
        error: (err) => {
          console.log(err);
          this.toaster.warning(
            'An error occurred while fetching products data.',
            'Error',
            {
              timeOut: 1000,
            }
          );
        },
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
