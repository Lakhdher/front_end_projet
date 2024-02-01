import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductsURL = environment.backend_url + '/products';
  getBrandsURL = environment.backend_url + '/products/brands';
  getCategoriesURL = environment.backend_url + '/products/categories';
  getFilteredProductsURL = environment.backend_url + '/products/search';

  constructor(private http: HttpClient) {}

  getProducts(limit: number = 100, skip: number = 0) {
    return this.http
      .get<any>(this.getProductsURL, {
        params: { limit: limit.toString(), skip: skip.toString() },
      })
      .pipe(map((res: any) => res.data.products));
  }

  getBrands() {
    return this.http
      .get<any>(this.getBrandsURL)
      .pipe(map((res: any) => res.data));
  }

  getCategories() {
    return this.http
      .get<any>(this.getCategoriesURL)
      .pipe(map((res: any) => res.data));
  }

  getFilteredProducts(body: {
    brands: any;
    categories: any;
    colors: any;
    maxPrice: number;
    minPrice: number;
    stock: any;
  }) {
    console.log(body);
    return this.http
      .post<any>(this.getFilteredProductsURL, body)
      .pipe(map((res: any) => res.data.products));
  }
}
