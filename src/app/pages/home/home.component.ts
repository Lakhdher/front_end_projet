import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';

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
    NgStyle
  ]
})
export class HomeComponent {
  tiles: Tile[] = [
    {image: 'assets/homeProducts/amazon.jpg', cols: 2, rows: 4,title: 'Amazon',text:'Amazon newest product'},
    {image: 'assets/homeProducts/casque.jpg', cols: 1, rows: 2,title:'Headset',text:'for a better lifestyle'},
    {image: 'assets/homeProducts/camera.jpg', cols: 1, rows: 2,title:'Camera',text:'for a better quality'},
    {image: 'assets/homeProducts/montre.jpg', cols: 2, rows: 1,title:'Watch',text:'for a better time'},
    {image: 'assets/homeProducts/combo.jpg', cols: 2, rows: 1,title:'Combo',text:'for a better price'},
  ];
}
