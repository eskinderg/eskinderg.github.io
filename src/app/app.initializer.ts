import { APP_INITIALIZER, Provider } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { appMeta } from './app.meta';

export const AppInit: Provider[] = [
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
