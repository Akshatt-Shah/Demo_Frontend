import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { LayoutsModule } from './layouts/layouts.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      ),
  },
  {
    path: 'page',
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
