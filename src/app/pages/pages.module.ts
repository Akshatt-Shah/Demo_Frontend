import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { AllcouponsComponent } from './allcoupons/allcoupons.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    AlluserComponent,
    AllproductsComponent,
    AllcategoryComponent,
    AllcouponsComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, TableModule,ButtonModule,ReactiveFormsModule],
})
export class PagesModule {}
