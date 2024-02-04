import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root', // Make service available globally
})
export class CartService {
  constructor(private toaster: ToastrService) {}
  private productSubject = new BehaviorSubject<any>(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '{}')
      : []
  );
  products$ = this.productSubject.asObservable();
  private productCountSubject = new BehaviorSubject<number>(
    this.productSubject.value.length
  );
  productCount$ = this.productCountSubject.asObservable();
  intermediate: any[] = [];
  setProduct(product: any) {
    product.quantity = 1;
    if (this.intermediate.find((p) => p.id === product.id)) {
      this.toaster.info(
        'Product already exists in cart. Please increase the quantity from the cart.'
      );
      throw new Error('Product already exists in cart');
    }
    this.intermediate.push(product);
    this.productSubject.next(this.intermediate);
    this.productCountSubject.next(this.intermediate.length);
    this.toaster.success('Product added to cart');
    localStorage.setItem('cart', JSON.stringify(this.intermediate));
  }
  removeProduct(product: any) {
    this.intermediate = this.intermediate.filter((p) => p.id !== product.id);
    this.productSubject.next(this.intermediate);
    this.productCountSubject.next(this.intermediate.length);
    localStorage.setItem('cart', JSON.stringify(this.intermediate));
  }
}
