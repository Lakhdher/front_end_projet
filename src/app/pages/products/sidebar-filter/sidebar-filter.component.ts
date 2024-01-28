import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { COLORS } from '../mock_data/colors';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    brands: [[]],
    categories: [[]],
    rating: [[]],
    colors: [[]],
    stock: [[]],
  });

  active_colors: { [key: string]: boolean } = {};

  constructor(
    private readonly fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.COLORS.forEach((color) => {
      this.active_colors[color.value] = false;
    });
  }

  @Input()
  set filters(filters: any) {
    this.filtersForm.patchValue(filters);
  }

  selectBrand(value: string) {
    console.log(value);
  }

  selectColor(value: string) {
    const colors = this.filtersForm.get('colors')?.value as string[] | null;
    if (colors) {
      const index = colors.indexOf(value);
      if (index > -1) {
        colors.splice(index, 1);
        this.active_colors[value] = false;
      } else {
        colors.push(value);
        this.active_colors[value] = true;
      }
    }
    console.log(this.active_colors);
  }

  triggerChange() {
    this.filterChanged.emit(this.filtersForm.value);
  }

  resetFilters() {
    this.filtersForm.reset();
    this.cdr.detectChanges();
    this.triggerChange();
  }

  selectCategory(value: string) {
    //   const categoryFormItem = this.filtersForm.get('categories');
    //   if (!categoryFormItem) return;
    //   const categories = categoryFormItem.value ?? [];
    //   const isCategoryPresent = categories.includes(value);
    //   if (isCategoryPresent) {
    //     categoryFormItem.setValue(categories.filter((b: any) => b !== value));
    //   } else {
    //     categoryFormItem.setValue([...categories, value]);
    //   }
    // }
    console.log(value);
  }
}
