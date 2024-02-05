import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RemixIconModule} from 'angular-remix-icon';
import {Product} from 'src/app/models/product';
import {ButtonComponent} from '../../products/UI/button/button.component';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
  standalone: true,
  imports: [RemixIconModule, CommonModule, ButtonComponent]
})
export class WishlistCardComponent {
  @Input() product!: Product;
  @Output()
  addToCart = new EventEmitter<void>();

  @Output()
  deleteFromWishlist = new EventEmitter<void>();

  @Output()
  openQuickView = new EventEmitter<void>();
}
