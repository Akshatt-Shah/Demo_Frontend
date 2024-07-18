import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewChecked {
  role: String = 'user';
  constructor() {}
  ngOnInit(): void {
    const userrole = localStorage.getItem('userrole') || 'user';
    this.role = userrole
  }

  ngAfterViewChecked(): void {
    const userrole = localStorage.getItem('userrole') || 'user';
    this.role = userrole
  }
}
