import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root' // Make service available globally
})
export class CartService {
  constructor(private toaster: ToastrService) {}
  private productSubject = new BehaviorSubject<any>(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : []);
  products$ = this.productSubject.asObservable();
  intermediate: any[] = [];
  setProduct(product: any) {
    product.quantity = 1;
    if (this.intermediate.find((p) => p.id === product.id)) {
      this.toaster.error(
        'Product already exists in cart. Please increase the quantity from the cart.',
        'Error',
        {
          timeOut: 3000,
        },
      );
      throw new Error('Product already exists in cart');

    }
    this.intermediate.push(product);
    this.productSubject.next(this.intermediate);
    localStorage.setItem('cart', JSON.stringify(this.intermediate));
  }
}
