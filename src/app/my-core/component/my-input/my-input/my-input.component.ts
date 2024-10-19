import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.scss'
})
export class MyInputComponent {

  @Input()
  formControl = new FormControl('');

  @Input()
  label: string = '';

  @Input()
  errorMessage: string = '';

  @Input()
  tooltip: string = '';

  @Input()
  minlength: string = '';

  @Input()
  maxlength: string = '';

  @Input()
  required: boolean = false;

  @Input()
  type: string = 'text';

  @Input()
  icon: string = '';
  

  hide: boolean = true;
}
