import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any[] = [];
  size: number = 0;

  applyFilter($event: any) {
    if ($event.maxPrice === null) $event.maxPrice = 1000000000000;
    if ($event.minPrice === null) $event.minPrice = 0;
    const body = {
      brands: $event.brands,
      categories: $event.categories,
      colors: $event.colors,
      maxPrice: parseInt($event.maxPrice),
      minPrice: parseInt($event.minPrice),
      stock: $event.stock,
      skip: parseInt('0'),
      limit: parseInt('100'),
    };
    this.productsService.getFilteredProducts(body).subscribe((products) => {
      this.products = products;
    });
  }
  openQuickView(arg0: any) {
    throw new Error('Method not implemented.');
  }
  clearSearch() {
    throw new Error('Method not implemented.');
  }

  searchQuery: string = '';

  constructor(private readonly productsService: ProductsService) {
    productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
