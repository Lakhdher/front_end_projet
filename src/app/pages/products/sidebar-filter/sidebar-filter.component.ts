import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { COLORS } from '../mock_data/colors';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BRANDS } from '../mock_data/brands';
import { CATEGORIES } from '../mock_data/categories';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { AccordionComponent } from '../UI/accordion/accordion.component';
import { AccordionItem } from '../UI/accordion/directives/accordion-item.directive';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../UI/button/button.component';
import { AccordionContent } from '../UI/accordion/directives/accordion-content.directive';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.css'],
  standalone: true,
  imports: [
    AccordionComponent,
    ReactiveFormsModule,
    AccordionItem,
    CommonModule,
    ButtonComponent,
    AccordionContent,
    AccordionContent,
    AccordionItem,
  ],
})
export class SidebarFilterComponent {
  @Output()
  filterChanged = new EventEmitter();

  COLORS: any[] = COLORS;
  brands: any[] = [];
  categories: any[] = [];

  brands$: Observable<string[]>;
  categories$: Observable<string[]>;

  filtersForm = this.fb.group({
    priceRange: this.fb.group(
      {
        from: [],
        to: [],
      },
      {
        validators: [
          (group) => {
            const from = group.get('from')?.value;
            const to = group.get('to')?.value;
            if (from && to && from > to) {
              return {
                range: true,
              };
            }
            return null;
          },
        ],
      }
    ),
    brands: this.fb.array(this.brands.map((x) => false)),
    categories: this.fb.array(this.categories.map((x) => false)),
    colors: this.fb.array(this.COLORS.map((x) => false)),
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly productsService: ProductsService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.brands$ = this.productsService.getBrands();
    this.brands$.subscribe((brands) => {
      this.brands = brands;
      this.filtersForm.setControl(
        'brands',
        this.fb.array(this.brands.map((x) => false))
      );
    });
    this.categories$ = this.productsService.getCategories();
    this.categories$.subscribe((categories) => {
      this.categories = categories;
      this.filtersForm.setControl(
        'categories',
        this.fb.array(this.categories.map((x) => false))
      );
    });
  }

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
    return;
  }

  triggerChange() {
    const brands_to_emit = this.brands.filter(
      (x, index) => this.filtersForm.get('brands')?.value[index]
    );
    const categories_to_emit = this.categories.filter(
      (x, index) => this.filtersForm.get('categories')?.value[index]
    );

    const colors_objects_to_emit = this.COLORS.filter(
      (x, index) => this.filtersForm.get('colors')?.value[index]
    );
    const colors_to_emit = colors_objects_to_emit.map((x) => x.value);
    const filters = {
      colors: colors_to_emit,
      minPrice: this.filtersForm.get('priceRange')?.value.from,
      maxPrice: this.filtersForm.get('priceRange')?.value.to,
      brands: brands_to_emit,
      categories: categories_to_emit,
    };
    this.filterChanged.emit(filters);
  }

  resetFilters() {
    this.filtersForm.reset();
    this.cdr.detectChanges();
    this.triggerChange();
  }
}
