import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  submitted: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private _toast: ToastService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
    });
  }
  get f() {
    return this.signupform.controls;
  }
  submitdata() {
    this.submitted = true;
    if (!this.signupform.invalid) {
      console.log(this.signupform.value);
      if (this.signupform.value['image'].length > 0) {
        const formdata = new FormData();
        formdata.append('image', this.signupform.value['image']);
        formdata.append('name', this.signupform.value['name']);
        formdata.append('password', this.signupform.value['password']);
        formdata.append('email', this.signupform.value['email']);
        formdata.append('role', this.signupform.value['role']);
        formdata.append('address', this.signupform.value['address']);
        console.log(formdata);
        this.userservice.signup(formdata).subscribe({
          next: (response: any) => {
            console.log(response);
            if (response.status === true) {
              this._toast.success(response.message);
              this.router.navigate(['/auth/login']);
            } else {
              this._toast.error(response.message);
            }
          },
          error: (error) => {
            this._toast.error('Failed to create user!');
          },
        });
      } else {
        const formdata = new FormData();
        // formdata.append('image', this.signupform.value['image']);
        formdata.append('name', this.signupform.value['name']);
        formdata.append('password', this.signupform.value['password']);
        formdata.append('email', this.signupform.value['email']);
        formdata.append('role', this.signupform.value['role']);
        formdata.append('address', this.signupform.value['address']);
        console.log(formdata);
        this.userservice.signup(formdata).subscribe({
          next: (response: any) => {
            console.log(response);
            if (response.status === true) {
              this._toast.success(response.message);
              this.router.navigate(['/login']);
            } else {
              this._toast.error(response.message);
            }
          },
          error: (error) => {
            this._toast.error('Failed to create user!');
          },
        });
      }
    }
  }
}
