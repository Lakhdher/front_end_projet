import {Component} from '@angular/core';
import {DeliveryComponent} from './delivery/delivery.component';
import {PickUpComponent} from './pick-up/pick-up.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [DeliveryComponent, CommonModule, PickUpComponent, RouterModule],
})
export class CheckoutComponent {
}
