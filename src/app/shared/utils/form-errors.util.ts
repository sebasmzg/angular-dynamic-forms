import { AbstractControl } from '@angular/forms';
import {FormErrors} from '../models/form-errors.enum';

export function getFormError(control: AbstractControl | null): string {
  if (!control || !control.errors || !control.touched) return '';

  if (control.hasError('required')) return FormErrors.Required;
  if (control.hasError('email')) return FormErrors.Email;
  if (control.hasError('min')) return FormErrors.Min;
  if (control.hasError('max')) return FormErrors.Max;
  if (control.hasError('pattern')) return FormErrors.Pattern;

  return 'Invalid input';
}
