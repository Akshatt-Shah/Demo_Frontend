import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss'],
})
export class AlluserComponent implements OnInit {
  userdata: any = [];

  first = 0;

  rows = 10;

  constructor(private userservice: UserService, private _toast: ToastService) {}
  ngOnInit(): void {
    this.userservice.getalluser().subscribe({
      next: (response: any) => {
        if (response.status === true) {
          this.userdata = response.data;
          // console.log(this.userdata);
        } else {
          this._toast.error(response.message);
        }
      },
      error: (err) => {
        // console.log(err);
        this._toast.error(err);
      },
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.userdata
      ? this.first === this.userdata.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.userdata ? this.first === 0 : true;
  }
}
