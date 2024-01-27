import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  images?: string[];

  @Input()
  title!: string;

  @Input()
  price!: number;

  @Input()
  wishlisted?: boolean;

  @Input()
  originalPrice?: number;

  @Input()
  subtitle?: string;

  @Input()
  link?: string;

  @Output()
  quickView = new EventEmitter<void>();

  @Output()
  addToCart = new EventEmitter<void>();

  @Output()
  addToWishlist = new EventEmitter<void>();

  priceDifference: number = 0;
  discount: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.originalPrice && this.price) {
      this.priceDifference = this.originalPrice - this.price;
      this.discount = this.getDiscountPercentage();
    }
  }

  getDiscountPercentage(): number {
    if (this.originalPrice && this.price) {
      console.log(this.priceDifference);
      return Math.round((this.priceDifference / this.originalPrice) * 100);
    }
    return -1;
  }
}
