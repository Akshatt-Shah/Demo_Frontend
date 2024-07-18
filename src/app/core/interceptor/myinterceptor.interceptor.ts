import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyinterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Add your custom logic here to modify the request or handle errors
    const token = localStorage.getItem('usertoken') || '';
    const newrequest = request.clone({
      setHeaders: {
        authorization: token,
      },
    });
    return next.handle(newrequest);
  }
}

export const myinterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: MyinterceptorInterceptor,
  multi: true,
};
