import {Component, HostBinding, Input,} from '@angular/core';

@Component({
  selector: 'button[appButton]',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input()
  class = '';

  @Input()
  variant = 'primary';

  @Input()
  size = 'base';

  @HostBinding('class')
  get buttonClasses() {
    const baseClasses = new Set([
      'button',
      this.variant ?? 'primary',
      this.size,
    ]);
    this.class.split(' ').forEach((c) => baseClasses.add(c));
    return Array.from(baseClasses).join(' ');
  }
}
