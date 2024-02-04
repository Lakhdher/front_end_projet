import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [SidebarFilterComponent, ProductsListComponent, CommonModule],
})
export class ProductsComponent {
  products: Product[] = [];
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
