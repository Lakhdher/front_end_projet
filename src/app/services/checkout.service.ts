import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  orderUrl = environment.backend_url + '/orders';

  constructor(private http: HttpClient) {
  }

  saveOrder(order: any) {
    return this.http.post(this.orderUrl, order);
  }
}
