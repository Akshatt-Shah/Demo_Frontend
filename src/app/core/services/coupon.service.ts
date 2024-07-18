import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from '../interface/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createcoupon(data: Coupon) {
    return this.http.post(this.Url + '/coupon/create', data, {
      withCredentials: true,
    });
  }
  getallcoupon() {
    return this.http.get(this.Url + '/coupon/getall', { withCredentials: true });
  }
  getcoupon(id: String) {
    return this.http.get(this.Url + '/coupon/getcoupon/' + id, {
      withCredentials: true,
    });
  }
  updatecoupon(id: String, data: Coupon) {
    return this.http.put(this.Url + '/coupon/updatecoupon/' + id, data, {
      withCredentials: true,
    });
  }
  deletecoupon(id: String) {
    return this.http.delete(this.Url + '/coupon/deletecoupon/' + id, { withCredentials: true });
  }
}
