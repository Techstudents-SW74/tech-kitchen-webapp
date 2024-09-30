import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;
  accountRoleFormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]], // Ejemplo de patrón para números de teléfono
      accountRole: this.accountRoleFormControl,
    });
  }

  get nameFormControl() {
    return this.signUpForm.get('name') as FormControl; // Asegúrate de hacer un type assertion aquí
  }

  get lastnameFormControl() {
    return this.signUpForm.get('lastname') as FormControl;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  get confirmPasswordFormControl() {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }

  get phoneFormControl() {
    return this.signUpForm.get('phone') as FormControl;
  }

  passwordsMatch(): boolean {
    return this.passwordFormControl.value === this.confirmPasswordFormControl.value;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted!', this.signUpForm.value);
      // Aquí puedes agregar la lógica para manejar el registro
      this.router.navigate(['/home-project']);
    }
  }
}
