import { Component } from '@angular/core';
import { PRODUCTS } from './mock_data/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  applyFilter($event: any) {
    throw new Error('Method not implemented.');
  }
  openQuickView(arg0: any) {
    throw new Error('Method not implemented.');
  }
  clearSearch() {
    throw new Error('Method not implemented.');
  }

  products = PRODUCTS;
  searchQuery: string = '';

  constructor() {
  }
}
