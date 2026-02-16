import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  country: string = '';
  gender: string = '';
  status: string = '';
  comments: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', {
        username: this.username,
        email: this.email,
        password: this.password,
        country: this.country,
        gender: this.gender,
        status: this.status,
        comments: this.comments
      });
      alert('Form submitted successfully!');
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }
}
