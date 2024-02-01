import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductsURL = environment.backend_url + '/products';

  constructor(private http: HttpClient) {}

  getProducts(limit: number = 100, skip: number = 0) {
    return this.http
      .get<any>(this.getProductsURL, {
        params: { limit: limit.toString(), skip: skip.toString() },
      })
      .pipe(map((res: any) => res.data.products));
  }
}
