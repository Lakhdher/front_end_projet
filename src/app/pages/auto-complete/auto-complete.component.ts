import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Product} from "../../models/product";
import {ApiService} from "../../services/api.service";
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap} from "rxjs";


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('productSearchInput', {static: true})
  productSearchInput!: ElementRef;
  searchResults: Product[] | undefined;
  showResults: boolean = false;
  constructor(private apiService: ApiService, private toaster: ToastrService) {
    this.searchResults = [];
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
        switchMap((searchTerm: string) => this.apiService.getProducts(searchTerm))
      ).subscribe({
      next: (data: any) => {
        console.log(data);
        this.searchResults = data
      },
      error: err => {
        console.log(err);
        this.toaster.warning(
          'An error occurred while fetching products data.',
          'Error',
          {
            timeOut: 1000,
          },
        );
      },
    });

  }


  selectProduct(product: Product) {
    console.log(product.id);
  }
}
