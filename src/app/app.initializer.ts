import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Provider } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { appMeta } from './app.meta';
import { LoaderInterceptor } from './providers/loading.interceptor';

export const AppInit: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeAppMeta,
    deps: [Meta],
    multi: true
  }
];

function initializeAppMeta(meta: Meta): () => HTMLMetaElement[] {
  return () => meta.addTags(appMeta);
}
