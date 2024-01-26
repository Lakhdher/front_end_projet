import { Component } from '@angular/core';
import { PRODUCTS } from './mock_products/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = PRODUCTS;
  
  constructor() { 
  }

}
