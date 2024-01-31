import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Product} from '../models/product';
import {environment} from "../../environments/environment.development"
import {of} from "rxjs";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  backend_url = environment.backend_url;

  constructor(private httpClient: HttpClient) {
  }

  getProducts(searchTerm: string) {
    if (searchTerm === '') {
      return of([
      ]);
    }
    return this.httpClient.get<Product[]>(`${this.backend_url}/products/advanced-search?query=${searchTerm}`)
      .pipe(
        catchError((err) => {
          console.error('Error fetching products:', err);
          return throwError(() => 'Error fetching products');
        })
      );
  }
}
