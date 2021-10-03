import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from '@/utils/env/env.service';
import { Store } from '@ngrx/store';
import { State } from '@/reducers';
import { selectAccessToken } from '@/reducers/user/user.selectors';
import { mergeMap, first } from 'rxjs/operators';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private env: EnvService, private store: Store<State>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url: string = req.url.includes('assets')
      ? req.url
      : `${this.env.apiUrl}${req.url}`;

    return this.store
      .select(selectAccessToken)
      .pipe(first())
      .pipe(
        mergeMap((accessToken) => {
          let headers: HttpHeaders = req.headers || new HttpHeaders();
          if (accessToken) {
            headers = headers.set('Authorization', `Bearer ${accessToken}`);
          }
          const apiReq = req.clone({ url, headers });
          return next.handle(apiReq);
        })
      );
  }
}
