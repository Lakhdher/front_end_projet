import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { OverlayService } from '../../../../services/overlay.service';
import {AngularRemixIconComponent} from "angular-remix-icon";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-side-sheet',
  templateUrl: './side-sheet.component.html',
  styleUrls: ['./side-sheet.component.css'],
  standalone: true,
  imports: [
    AngularRemixIconComponent,
    NgForOf,
    NgIf
  ]
})
export class SideSheetComponent {
  @Input()
  @HostBinding('class.open')
  isOpen = false;

  constructor(private overlayService: OverlayService) {}

  toggle() {
    this.isOpen = !this.isOpen;
    this.updateOverlay();
  }

  open() {
    this.isOpen = true;
    this.updateOverlay();
  }

  close() {
    this.isOpen = false;
    this.updateOverlay();
  }

  updateOverlay() {
    this.overlayService.showOverlaySubject.next(this.isOpen);
  }
}
