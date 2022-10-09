import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

const API_RESPONSE_FORMAT = 'json'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setParams: {
        format: API_RESPONSE_FORMAT,
        api_key: environment.apiKey
      }
    })

    return next.handle(request);
  }
}
