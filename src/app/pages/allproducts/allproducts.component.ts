import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  submitted:Boolean=false;
  productdata: any = [];
  productform!:FormGroup
  rows = 10;
  first = 0;
  constructor(private productservice:ProductService,private _toast :ToastService){}
  ngOnInit(): void {
    this.productservice.getallproduct().subscribe({
      next: (response: any) => {
        if(response.status === true){

          this.productdata = response.data;
        }else{
          this._toast.error(response.message)
        }
      },
      error: (error: any) => {
        this._toast.error(error)
      },
    })
  }
  updateproduct(data: any) {
    console.log('Updated product:', data);
  }
  deleteproduct(id: String) {
    console.log('Deleted product with ID:', id);
  }
  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    console.log(event);
  }
  submitdata(){
    // this.productform
  }

  get f(){
    return this.productform.controls;
  }
  onFileSelect(file:any){}
}
