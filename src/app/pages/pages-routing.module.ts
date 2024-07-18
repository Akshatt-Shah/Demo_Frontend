import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'alluser', component: AlluserComponent },
  { path: 'allcategory', component: AllcategoryComponent },
  { path: 'allproduct', component: AllproductsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
