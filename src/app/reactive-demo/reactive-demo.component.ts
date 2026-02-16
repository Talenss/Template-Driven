import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent {
  roles = ['Admin', 'User', 'Guest'];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Admin', Validators.required],
      gender: ['', Validators.required],  // Added: Required radio
      status: ['', Validators.required],  // Added: Required radio
      comments: ['']  // Added: Optional textarea
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log('Form Submitted:', this.form.value);
      alert('Form submitted successfully! Data: ' + JSON.stringify(this.form.value));
    }
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.touched && control?.invalid;
  }
}
