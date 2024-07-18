import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createproduct(data: Product) {
    return this.http.post(this.Url + '/product/create', data, {
      withCredentials: true,
    });
  }
  getallproduct() {
    return this.http.get(this.Url + '/product/getall', { withCredentials: true });
  }
  getproduct(id: String) {
    return this.http.get(this.Url + '/product/getproduct/' + id, {
      withCredentials: true,
    });
  }
  getproductBycategory(id: String) {
    return this.http.get(this.Url + '/product/getallbycategory/' + id, {
      withCredentials: true,
    });
  }
  updateproduct(id: String, data: Product) {
    return this.http.put(this.Url + '/product/updateproduct/' + id, data, {
      withCredentials: true,
    });
  }
  deleteproduct(id: String) {
    return this.http.delete(this.Url + '/product/deleteproduct/' + id, { withCredentials: true });
  }
}
