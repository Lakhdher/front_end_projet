import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Make service available globally
})
export class CartService {

  private productSubject = new BehaviorSubject<any>(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : []);
  products$ = this.productSubject.asObservable();
  intermediate: any[] = [];
  setProduct(product: any) {
    product.quantity = 1;
    this.intermediate.push(product);
    this.productSubject.next(this.intermediate);
    localStorage.setItem('cart', JSON.stringify(this.intermediate));
  }
}
