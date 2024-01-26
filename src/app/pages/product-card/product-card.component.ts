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

  constructor() {}
}
