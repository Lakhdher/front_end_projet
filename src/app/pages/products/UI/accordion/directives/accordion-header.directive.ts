import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordionHeader]',
})
export class AccordionHeader {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
