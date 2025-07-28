import { APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
// import { Meta } from '@angular/platform-browser';
// import { appMeta } from './app.meta';
import { bootstrapComponentsFactory } from './bootstrap';

export const AppInit = [
    // provideAppInitializer(initializeAppMeta()),
    {
        provide: APP_BOOTSTRAP_LISTENER,
        useFactory: bootstrapComponentsFactory,
        deps: [ApplicationRef],
        multi: true
    }
];

// function initializeAppMeta(): () => void {
//     return () => inject(Meta).addTags(appMeta);
// }
