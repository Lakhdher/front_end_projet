import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {CurrencyPipe, KeyValuePipe, NgFor, NgIf, NgOptimizedImage,} from '@angular/common';
import {CartService} from '../../services/cart.service';
import {ToastrService} from 'ngx-toastr';
import {ProductsService} from 'src/app/services/products.service';
import {Router, RouterModule} from '@angular/router';

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
  imports: [
    MatDividerModule,
    NgIf,
    NgFor,
    NgOptimizedImage,
    KeyValuePipe,
    CurrencyPipe,
    RouterModule,
  ],
})
export class CartComponent implements OnInit {
  products: any;
  p$ = this.cartService.products$;

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef,
    private productService: ProductsService,
    private toaster: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.cartService.products$.subscribe((products) => {
      this.products = products;
    });
    console.log(this.products[0]);
  }

  setQuantity(e: any, product: Product) {
    product.quantity = e.target.value;
  }

  clearCart() {
    this.products = [];
    localStorage.removeItem('cart');
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

  addToWishlist(product: Product) {
    return this.productService.addToWishlist(product.id as number).subscribe(
      (res) => {
        console.log(res);
        if (res === 'Added to Wishlist Successfully!') {
          this.toaster.success('Product added to wishlist');
        } else {
          this.toaster.error('Product already in wishlist');
        }
      },
      (err) => {
        this.toaster.error('Please login to proceed further!');
      }
    );
  }

  getSubtotal(): number {
    return this.products.reduce(
      (acc: number, product: Product) => acc + product.price * product.quantity,
      0
    );
  }

  getTotal(): number {
    if (this.products.length === 0) {
      return 0;
    }
    return this.getSubtotal() + 10;
  }
}
