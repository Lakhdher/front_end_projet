import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appAccordionHeader]',
  standalone: true,
})
export class AccordionHeader {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}
