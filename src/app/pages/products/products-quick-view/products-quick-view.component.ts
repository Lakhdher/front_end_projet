import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SideSheetComponent } from '../UI/side-sheet/side-sheet.component';

@Component({
  selector: 'app-product-quick-view',
  templateUrl: './products-quick-view.component.html',
  styleUrls: ['./products-quick-view.component.css'],
})
export class ProductQuickViewComponent implements OnInit {
  @Input()
  product!: any;

  @Output()
  addToCart = new EventEmitter<any>();

  @ViewChild(SideSheetComponent)
  private readonly sideSheetRef!: SideSheetComponent;

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.sideSheetRef?.open();
  }

  close() {
    this.sideSheetRef?.close();
  }
}
