import { Component } from '@angular/core';
<<<<<<< HEAD
import { PRODUCTS } from './mock_data/products';
=======
>>>>>>> dev

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
<<<<<<< HEAD
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  clearSearch() {
    throw new Error('Method not implemented.');
  }

  products = PRODUCTS;
  searchQuery: string = '';

  constructor() {}
=======
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

>>>>>>> dev
}
