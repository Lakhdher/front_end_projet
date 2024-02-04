import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
})
export class WishlistCardComponent {
  @Input() product!: Product;
  addToCart: any;

  @Output()
  deleteFromWishlist = new EventEmitter<void>();

  @Output()
  openQuickView = new EventEmitter<void>();
}
