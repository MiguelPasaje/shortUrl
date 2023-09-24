import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Importa throwError
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN = '5c147dcc8b7d61312f4ef125138becc8868ded61'
    request = request.clone({ setHeaders: { Authorization: `Bearer ${TOKEN}` } })
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error);; // Devuelve un observable de error
      })
    );
  }
}
