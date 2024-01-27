import { Component } from '@angular/core';
import { PRODUCTS } from './mock_data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  clearSearch() {
    throw new Error('Method not implemented.');
  }

  products = PRODUCTS;
  searchQuery: string = '';

  constructor() {}
}
