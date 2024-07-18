import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private Url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createcategory(data: any) {
    return this.http.post(this.Url + '/category/create', data, {
      withCredentials: true,
    });
  }
  getallcategory() {
    return this.http.get(this.Url + '/category/getall', { withCredentials: true });
  }
  getcategory(id: String) {
    return this.http.get(this.Url + '/category/getcategory/' + id, {
      withCredentials: true,
    });
  }
  updatecategory(id: String, data: any) {
    return this.http.put(this.Url + '/category/updatecategory/' + id, data, {
      withCredentials: true,
    });
  }
  deletecategory(id: String) {
    return this.http.delete(this.Url + '/category/deletecategory/' + id, { withCredentials: true });
  }
}
