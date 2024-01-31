import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { COLORS } from '../mock_data/colors';
import { FormBuilder } from '@angular/forms';
import { BRANDS } from '../mock_data/brands';
import { CATEGORIES } from '../mock_data/categories';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.css'],
})
export class SidebarFilterComponent {

  @Output()
  filterChanged = new EventEmitter();

  COLORS = COLORS;
  brands = BRANDS;
  categories = CATEGORIES;

  filtersForm = this.fb.group({
    priceRange: this.fb.group({
      from: [],
      to: [],
    }),
    brands: this.fb.array(this.brands.map((x) => false)),
    categories: this.fb.array(this.categories.map((x) => false)),
    colors: this.fb.array(this.COLORS.map((x) => false)),
    stock: [false],
  });

  constructor(private readonly fb: FormBuilder) {}

  @Input()
  set filters(filters: any) {
    this.filtersForm.patchValue(filters);
  }

  selectColor(value: string) {
    const index = this.COLORS.filter((x) => x.value === value)[0].index;
    const colors = this.filtersForm.get('colors');
    if (colors) {
      const new_array = colors.value;
      if (colors.value[index] === true) {
        new_array[index] = false;
        colors.setValue(new_array, { emitEvent: true });
      } else {
        new_array[index] = true;
        colors.value[index] = true;
      }
    }
  }

  getState(value: string) {
    const index = this.COLORS.filter((x) => x.value === value)[0].index;
    const colors = this.filtersForm.get('colors');
    if (colors) {
      return colors.value[index];
    }
    return
  }

  triggerChange() {
    this.filterChanged.emit(this.filtersForm.value);
  }

  resetFilters() {
    this.filtersForm.reset();
    this.triggerChange();
  }

}
