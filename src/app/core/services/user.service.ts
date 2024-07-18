import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(this.Url + '/user/loginuser', data, {
      withCredentials: true,
    });
  }
  signup(data: any) {
    return this.http.post(this.Url + '/user/create', data, {
      withCredentials: true,
    });
  }
  getuser() {
    return this.http.get(this.Url + '/user/getuser', {
      withCredentials: true,
    });
  }
  getalluser() {
    return this.http.get(this.Url + '/user/getall', {
      withCredentials: true,
    });
  }
}
