import {FieldConfig, Fieldtype} from '../models/form-field.model';

export const formConfig: FieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: Fieldtype.Text,
    required: true,
    placeholder: 'Enter your first name'
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: Fieldtype.Text,
    required: true,
    placeholder: 'Enter your last name'
  },
  {
    name: 'age',
    label: 'Age',
    type: Fieldtype.Number,
    required: false,
    placeholder: 'Enter your age'
  },
  {
    name: 'email',
    label: 'Email',
    type: Fieldtype.Email,
    required: true,
    placeholder: 'Enter your email'
  },
  
  {
    name: 'gender',
    label: 'Gender',
    type: Fieldtype.Select,
    required: false,
    placeholder: 'Select your gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ]
  },
  {
    name: 'preferences',
    label: 'Preferences',
    type: Fieldtype.Radio,
    required: true,
    placeholder: 'Select your preferences',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]
  },
  {
    name: 'subscribe',
    label: 'Subscribe to newsletter',
    type: Fieldtype.Checkbox,
    required: false,
    placeholder: 'Subscribe to our newsletter'
  },
  {
    name: 'comments',
    label: 'Comments',
    type: Fieldtype.Textarea,
    required: false,
    placeholder: 'Enter your comments'
  }
];
