import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, filter, map } from 'rxjs';
import { promises } from '../pages/products/mock_data/promises';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  promises = promises;

  showOverlaySubject = new BehaviorSubject(false);
  showOverlay$ = this.showOverlaySubject.asObservable();

  clickedOutsideSubject = new Subject<void>();
  clickedOutside$ = this.clickedOutsideSubject.asObservable();

  activeProductSubject = new Subject<any>();
  activeProduct$ = this.activeProductSubject.asObservable().pipe(
    filter((product) => !!product),
    map((product) => {
      return {
        ...product,
        promises: this.promises,
      };
    })
  );
}
