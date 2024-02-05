import {Component, OnInit} from '@angular/core';
import { DeliveryComponent } from './delivery/delivery.component';
import { PickUpComponent } from './pick-up/pick-up.component';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [DeliveryComponent, CommonModule, PickUpComponent, RouterModule],
})
export class CheckoutComponent {
  total: number | null = null;

  constructor(private route: Router) {
    if (localStorage.getItem('total')) {
      this.total = Number(localStorage.getItem('total'));
    }
    else {
      this.total = 0;
    }
  }


}
