import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {AsyncPipe, NgClass, NgForOf, NgStyle} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";

export interface Tile {
  cols: number;
  rows: number;
  image: string;
  title?: string;
  text?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    NgForOf,
    NgClass,
    MatButtonModule,
    NgStyle,
    AsyncPipe
  ]
})
export class HomeComponent {
  products$: Observable<any[]>;

  constructor(
    private productsService: ProductsService,
  ) {
    this.products$ = this.productsService.getProducts(4,3.75);

  }


}
