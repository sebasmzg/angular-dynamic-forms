export enum Fieldtype {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Number = 'number',
  Date = 'date',
  Select = 'select',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Textarea = 'textarea',
}

export interface Option {
  label: string;
  value: string | number;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: Fieldtype;
  required: boolean;
  placeholder?: string;
  options?: Option[];
}
