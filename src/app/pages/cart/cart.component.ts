import {Component, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {NgFor, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CartService} from "../../services/cart.service";
import { ChangeDetectorRef } from '@angular/core';


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
export class CartComponent implements OnInit{
  products:any;
  p$ = this.cartService.products$;
  constructor(private cartService: CartService,private cd: ChangeDetectorRef) {
  }
  ngOnInit() {

    this.cartService.products$.subscribe(
      products => {
        this.products = products;
      }
    );
  }
  setQuantity(e:any, product: Product) {
    product.quantity = e.target.value;
  }
  clearCart() {
    this.products = [];
    localStorage.removeItem('cart');
  }
  checkout() {
    console.log("Checkout");
  }
  removeProduct(product: Product) {
    this.products = this.products.filter((p:any) => p.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

}
