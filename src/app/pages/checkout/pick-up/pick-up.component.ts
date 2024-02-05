import {Component} from '@angular/core';
import storesData from './data/stores';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PickUpComponent {
  selectedDate: Date;
  showDropDown: boolean = false;
  selectedWindow: string;
  selectedStore: string;
  stores = storesData;

  constructor() {
    this.selectedDate = new Date();
    this.selectedWindow = "Window 1"
    this.selectedStore = "Ariana Store"
  }

  onWindowSelected(windowName: string) {
    this.selectedWindow = windowName;
    this.showDropDown = false;
  }

  onStoreSelected(storeName: string) {
    this.selectedStore = storeName;
  }


  getDates(number: number) {
    const days = [];
    for (let i = 0; i < number; i++) {
      const date = new Date();
      console.log(date.getDate());
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  }

  onPickUpRequest() {
    console.log('Pick up requested', {
      date: this.selectedDate,
      window: this.selectedWindow,
      store: this.selectedStore
    });
  }
}
