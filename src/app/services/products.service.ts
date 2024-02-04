import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, map, of, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  backend_url = environment.backend_url;
  getProductsURL = environment.backend_url + '/products';
  getBrandsURL = environment.backend_url + '/products/brands';
  getCategoriesURL = environment.backend_url + '/products/categories';
  getFilteredProductsURL = environment.backend_url + '/products/search';
  getWishlistURL = environment.backend_url + '/user/wishlist';

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

  getSearchedProducts(searchTerm: string) {
    if (searchTerm === '') {
      return of([]);
    }
    return this.http
      .get<Product[]>(
        `${this.backend_url}/products/advanced-search?query=${searchTerm}&skip=0&limit=10`
      )
      .pipe(
        catchError((err) => {
          console.error('Error fetching products:', err);
          return throwError(() => 'Error fetching products');
        })
      );
  }

  getWishlist() {
    return this.http
      .get<any>(this.getWishlistURL)
      .pipe(map((res: any) => res.data));
  }

  deleteFromWishlist(arg0: number) {
    return this.http.delete(`${this.getWishlistURL}/${arg0}`);
  }

  addToWishlist(arg0: number) {
    return this.http.post(`${this.getWishlistURL}/${arg0}`, {}).pipe(
      map((res: any) => res.message),
    );
  }
}
