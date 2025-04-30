import { Component } from '@angular/core';
import {FieldConfig} from './shared/models/form-field.model';
import {formConfig} from './shared/dynamic-form/form.config';
import {DynamicFormComponent} from './shared/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DynamicFormComponent,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-form-builder';
  formFields: FieldConfig[] = formConfig;
  onSubmit(formValue: any) {
    console.log('Form submitted', formValue);
  }
}
