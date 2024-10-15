

import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { LoaderhttpService } from '../services/loaderhttp.service';

const TOKEN_HEADER_KEY = 'X-Bearer-Token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, public loaderService: LoaderhttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      //alert(token);
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }else{
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, '0') });
    }
    this.loaderService.changeData(true);
    return next.handle(authReq).pipe(
      finalize(() => this.loaderService.changeData(false))
    );
  }
}

export const authInterceptorProviders = [ 
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
