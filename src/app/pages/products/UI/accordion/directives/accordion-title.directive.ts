import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordionTitle]',
  standalone: true,
})
export class AccordionTitle {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
