import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  submitted: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private _toast: ToastService,
    private router :Router
  ) {}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['admin@gmail.com', Validators.required],
      password: ['Admin', Validators.required],
    });
  }
  get f() {
    return this.loginform.controls;
  }

  submitdata() {
    this.submitted = true;
    if (!this.loginform.invalid) {
      this.userservice.login(this.loginform.value).subscribe({
        next: (response: any) => {
          if (response.status === true) {
            console.log(response)
            localStorage.setItem('usertoken', response.token);
            localStorage.setItem('userrole', response.data.data.role);
            this._toast.success('Login Successful');
            this.router.navigate(['/page']);
          } else {
            console.log(response)
            this._toast.error(response.message);
          }
        },
        error: (err) => {
          this._toast.error('Something went wrong');
        },
      });
    }
  }
}
