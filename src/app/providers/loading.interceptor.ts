import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LanguageService } from './language.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private lang: LanguageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.lang.loading = true;
    return next.handle(req).pipe(
      finalize(() => this.lang.loading = false)
    );
  }

}
