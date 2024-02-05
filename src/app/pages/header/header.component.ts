import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutoCompleteComponent } from '../auto-complete/auto-complete.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, AutoCompleteComponent]
})
export class HeaderComponent implements OnInit {
  status$: Observable<any> | undefined;
  productCount$: Observable<number> | undefined;

  constructor(
    protected authService: AuthService,
    protected cartService: CartService
  ) {}

  ngOnInit(): void {
    this.status$ = this.authService.isLoggedIn$;
    this.productCount$ = this.cartService.productCount$;
  }

  logout() {
    this.authService.logout();
  }
}
