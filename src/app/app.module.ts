import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myinterceptor } from './core/interceptor/myinterceptor.interceptor';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularToastifyModule,
  ],
  providers: [ToastService, myinterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
