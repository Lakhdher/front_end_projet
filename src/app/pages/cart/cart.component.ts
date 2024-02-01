import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {NgFor, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
  category?: string;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [MatDividerModule, NgIf, NgFor, NgOptimizedImage]
})
export class CartComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      quantity: 1,
      id: 1,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 2',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      quantity: 1,
      id: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 3',
      price: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      quantity: 4,
      id: 3,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 4',
      price: 250,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      quantity: 5,
      id: 4,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 5',
      price: 300,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      quantity: 10,
      id: 5,
      image: 'https://via.placeholder.com/150'
    },

  ];
  setQuantity(e:any, product: Product) {
    product.quantity = e.target.value;
  }
  clearCart() {
    this.products = [];
  }
  checkout() {
    console.log("Checkout");
  }
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }

}
