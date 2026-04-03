import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: Auth) {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  async onSubmit() {
    await this.auth.register(this.userForm.value).subscribe();
  }

}
