import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.scss'],
})
export class AdminsideComponent implements OnInit {
  islogin:Boolean=false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    const usertoken = localStorage.getItem('usertoken');
    if (usertoken) {
      this.islogin = true;
    }
  }
  logout() {
    localStorage.removeItem('usertoken');
    localStorage.removeItem('userrole');
    this.router.navigate(['/auth/login']);
  }
}
