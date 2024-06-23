import { inject } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LanguageService } from './language.service';

export const LoaderInterceptor: HttpInterceptorFn = (
    request: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const lang = inject(LanguageService);
    lang.loading = true;
    return next(request).pipe(
        finalize(() => {
            lang.loading = false;
        })
    );
};
