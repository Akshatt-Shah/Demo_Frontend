import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss'],
})
export class AllcategoryComponent implements OnInit {
  categorydata: any = [];
  first = 0;
  categoryform!: FormGroup;
  rows = 10;
  selectedFile: File | null = null;
  submitted: Boolean = false;
  isadd: Boolean = true;
  id: String = '';
  constructor(
    private categoryservice: CategoryService,
    private _toast: ToastService,
    private fb: FormBuilder
  ) {}

  getcategory() {
    this.categoryservice.getallcategory().subscribe({
      next: (response: any) => {
        if (response.status === true) {
          this.categorydata = response.data;
          console.log(this.categorydata);
        } else {
          this._toast.error(response.message);
        }
      },
      error: (error: any) => {
        this._toast.error(error.message);
      },
    });
  }
  ngOnInit(): void {
    this.categoryform = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
    });
    this.getcategory();
    
  }
  onFileSelect(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  submitdata() {
    this.submitted = true;
    if (this.isadd === false) {
      if (!this.categoryform.invalid) {
        if (this.selectedFile) {
          console.log(this.categoryform.value['image']);
          const formdata = new FormData();
          formdata.append('name', this.categoryform.value['name']);
          formdata.append('image', this.selectedFile, this.selectedFile.name);
          this.categoryservice.updatecategory(this.id, formdata).subscribe({
            next: (response: any) => {
              if (response.status === true) {
                this._toast.success(response.message);
                this.categoryform.reset();
                this.getcategory();
                const close = document.getElementById('close');
                close?.click();
                this.submitted = false;
              } else {
                this._toast.error(response.message);
              }
            },
            error: (error: any) => {
              this._toast.error(error.message);
            },
          });
        } else {
          this.categoryservice
            .updatecategory(this.id, { name: this.categoryform.value['name'] })
            .subscribe({
              next: (response: any) => {
                if (response.status === true) {
                  this._toast.success(response.message);
                  this.categoryform.reset();
                  this.getcategory();
                  const close = document.getElementById('close');
                  close?.click();
                  this.submitted = false;
                } else {
                  this._toast.error(response.message);
                }
              },
              error: (error: any) => {
                this._toast.error(error.message);
              },
            });
        }
      }
    } else {
      if (!this.categoryform.invalid) {
        if (this.selectedFile) {
          console.log(this.categoryform.value['image']);
          const formdata = new FormData();
          formdata.append('name', this.categoryform.value['name']);
          formdata.append('image', this.selectedFile, this.selectedFile.name);
          this.categoryservice.createcategory(formdata).subscribe({
            next: (response: any) => {
              if (response.status === true) {
                this._toast.success(response.message);
                this.categoryform.reset();
                this.getcategory();
                const close = document.getElementById('close');
                close?.click();
                this.submitted = false;
              } else {
                this._toast.error(response.message);
              }
            },
            error: (error: any) => {
              this._toast.error(error.message);
            },
          });
        } else {
          this.categoryservice
            .createcategory({ name: this.categoryform.value['name'] })
            .subscribe({
              next: (response: any) => {
                if (response.status === true) {
                  this._toast.success(response.message);
                  this.categoryform.reset();
                  this.getcategory();
                  const close = document.getElementById('close');
                  close?.click();
                  this.submitted = false;
                } else {
                  this._toast.error(response.message);
                }
              },
              error: (error: any) => {
                this._toast.error(error.message);
              },
            });
        }
      }
    }
    // console.log(this.categoryform.value);
  }

  updatecategory(data: any) {
    const openmodel = document.getElementById('open');
    openmodel?.click();
    this.isadd = false;
    this.id = data._id;
    this.categoryform.patchValue({
      name: data.name,
    });
  }
  deletecategory(id: String) {
    this.categoryservice.deletecategory(id).subscribe({
      next: (response: any) => {
        if (response.status === true) {
          this._toast.success(response.message);
          this.getcategory();
        } else {
          this._toast.error(response.message);
        }
      },
      error: (error: any) => {
        this._toast.error(error.message);
      },
    });
  }
  get f() {
    return this.categoryform.controls;
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
    console.log(event)
  }

  isLastPage(): boolean {
    return this.categorydata
      ? this.first === this.categorydata.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.categorydata ? this.first === 0 : true;
  }
}
