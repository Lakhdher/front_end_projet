import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RemixIconModule } from 'angular-remix-icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [RemixIconModule, CurrencyPipe, AsyncPipe, CommonModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input()
  product!: any;

  @Output()
  quickView = new EventEmitter<void>();

  @Output()
  addToCart = new EventEmitter<any>();

  @Output()
  addToWishlist = new EventEmitter<void>();

  @Output()
  removeFromWishlit = new EventEmitter<void>();

  priceDifference: number = 0;
  discount: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.product.originalPrice && this.product.price) {
      this.priceDifference = this.product.originalPrice - this.product.price;
      this.discount = this.getDiscountPercentage();
    }
  }

  getDiscountPercentage(): number {
    if (this.product.originalPrice && this.product.price) {
      return Math.round((this.priceDifference / this.product.originalPrice) * 100);
    }
    return -1;
  }
}
