import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordionContent]',
  standalone: true,
})
export class AccordionContent {
  constructor(public templateRef: TemplateRef<unknown>) {}
}