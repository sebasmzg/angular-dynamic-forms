import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FieldConfig,Fieldtype} from '../models/form-field.model';
import {getFormError} from '../utils/form-errors.util';
import {SharedModule} from '../shared.module';




@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Input() title: string = '';
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;
  fieldTypes = Fieldtype;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    const group: any = {};
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      if (field.type === 'email') validators.push(Validators.email);
      group[field.name] = new FormControl('', validators);
    });
    this.form = this.fb.group(group)
  }

  getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    return getFormError(control);
  }
}
