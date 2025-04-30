# Dynamic Reactive Form - Angular

This project implements a dynamic reactive form system in Angular, allowing the creation of complex forms based on user-defined configurations.

## Main Features

- **Dynamic reactive forms**: Generate forms based on JSON configurations
- **Field validation**: Support for multiple validation rules
- **Standalone components**: Modern architecture based on standalone components
- **Angular Material**: User interface with Material Design components
- **Customizable**: Easily adaptable to different use cases

## Technologies Used

- Angular (latest version)
- TypeScript
- Angular Material
- Reactive Forms
- CSS/SCSS

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dynamic-reactive-form.git

# Navigate to the directory
cd dynamic-reactive-form

# Install dependencies
npm install

# Install Angular Material (if not already installed)
npm install @angular/material @angular/cdk @angular/animations

# Start the application
ng serve
```

## Component Usage

The main `DynamicFormComponent` receives configurations to generate forms:

```typescript
// In your parent component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dynamic-form
      [fields]="formFields"
      [title]="'User Registration'"
      (formSubmit)="onSubmit($event)">
    </app-dynamic-form>
  `
})
export class AppComponent {
  formFields = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      required: true,
      validators: [{type: 'required', message: 'Name is required'}]
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validators: [
        {type: 'required', message: 'Email is required'},
        {type: 'email', message: 'Invalid email format'}
      ]
    }
    // More fields as needed
  ];

  onSubmit(formData: any) {
    console.log('Form data:', formData);
    // Process data
  }
}
```

## Field Configuration Structure

Each form field is defined by an object with the following properties:

- `type`: Field type (text, email, number, select, etc.)
- `name`: Unique field identifier
- `label`: Label to display
- `required`: Indicates if the field is mandatory
- `validators`: Array of validators with custom messages
- `options`: Array of options for select, radiobutton, etc.
- `placeholder`: Placeholder text (optional)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
