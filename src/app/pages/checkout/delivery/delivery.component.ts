import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../../../services/checkout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class DeliveryComponent {
  form: FormGroup;
  paymentForm: FormGroup;

  shippingShow = true;
  paymentShow = false;

  receiveOrder: any;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private checkoutService: CheckoutService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      Apt: [''],
      city: ['', [Validators.required]],
      state: [''],
      zip: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required]],
      expiration: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      holder: ['', [Validators.required]],
    });

    this.receiveOrder = route.snapshot.data['order'];
  }

  save() {
    const val = this.form.value;
    const paymentVal = this.paymentForm.value;
    if (
      val.firstName &&
      val.lastName &&
      val.streetAddress &&
      val.city &&
      val.zip &&
      val.phone &&
      paymentVal.cardNumber &&
      paymentVal.expiration &&
      paymentVal.cvv &&
      paymentVal.holder
    ) {
      this.checkoutService.saveOrder({
        firstName: val.firstName,
        lastName: val.lastName,
        streetAddress: val.streetAddress,
        Apt: val.Apt,
        city: val.city,
        state: val.state,
        zip: val.zip,
        phone: val.phone,
        products: this.receiveOrder,
      });
      this.toaster.success(
        'Delivery information saved successfully',
        'Success',
        {
          timeOut: 1000,
        }
      );
      this.router.navigateByUrl('/home');
    } else {
      this.toaster.warning('Please fill in all the required fields', 'Error', {
        timeOut: 1000,
      });
    }
  }

  toggleShipping() {
    this.shippingShow = !this.shippingShow;
  }

  togglePayment() {
    this.paymentShow = !this.paymentShow;
  }

    protected readonly localStorage = localStorage;
  protected readonly Number = Number;
}
