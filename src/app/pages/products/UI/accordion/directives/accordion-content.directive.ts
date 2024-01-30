import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordionContent]',
})
export class AccordionContent {
  constructor(public templateRef: TemplateRef<unknown>) {}
}