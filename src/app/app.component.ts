import { Component, Inject, OnDestroy } from '@angular/core';
import { PRODUCTS } from './pages/products/mock_data/products';
import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { OverlayService } from './services/overlay.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('200ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnDestroy {
  readonly showOverlay$: Observable<boolean>;

  readonly destroy$ = new Subject<void>();

  constructor(
    public readonly overlayService: OverlayService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.showOverlay$ = this.overlayService.showOverlay$;
    this.showOverlay$.pipe(takeUntil(this.destroy$)).subscribe((isOpen) => {
      if (isOpen) {
        this.document.body.classList.add('overflow-y-hidden');
      } else {
        this.document.body.classList.remove('overflow-y-hidden');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
