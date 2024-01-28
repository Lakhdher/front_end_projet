import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { AccordionItem } from './directives/accordion-item.directive';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('contentExpansion', [
      state(
        'expanded',
        style({ height: '*', opacity: 1, visibility: 'visible' })
      ),
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, visibility: 'hidden' })
      ),
      transition(
        'expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')
      ),
    ]),
  ],
})
export class AccordionComponent implements AfterContentInit {
  expanded = new Set<number>();

  @Input() collapsing = false;

  @ContentChildren(AccordionItem) items?: QueryList<AccordionItem>;

  ngAfterContentInit() {
    if (this.items) {
      this.items?.forEach((item, index) => {
        if (item.isOpen) {
          this.expanded.add(index);
        }
      });
    }
  }

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };

  noOp() {
    return;
  }
}
