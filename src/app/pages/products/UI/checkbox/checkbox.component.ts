import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() value!: string;
  @Input() id?: string;
  @Input()
  checked = false;

  changed!: (value: boolean) => void;
  touched!: () => void;
  disabled = false;

  onChange(event: any) {
    this.checked = event.target.checked;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  writeValue(obj: any): void {
    this.checked = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}