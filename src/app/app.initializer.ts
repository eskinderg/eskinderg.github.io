import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationRef, Provider } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { appMeta } from './app.meta';
import { bootstrapComponentsFactory } from './bootstrap';

export const AppInit: Provider[] = [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeAppMeta,
        deps: [Meta],
        multi: true
    },
    {
        provide: APP_BOOTSTRAP_LISTENER,
        useFactory: bootstrapComponentsFactory,
        deps: [ApplicationRef],
        multi: true
    }
];

function initializeAppMeta(meta: Meta): () => HTMLMetaElement[] {
    return () => meta.addTags(appMeta);
}
