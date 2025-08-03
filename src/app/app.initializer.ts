import {
    APP_BOOTSTRAP_LISTENER,
    ApplicationRef,
    inject,
    provideAppInitializer,
    runInInjectionContext,
    EnvironmentInjector
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { appMeta } from './app.meta';
import { bootstrapComponentsFactory } from './bootstrap';
import { ThemeService } from './theme/theme.service';

export const AppInit = [
    provideAppInitializer(initializeAppMeta()),
    provideAppInitializer(initTheme()),
    {
        provide: APP_BOOTSTRAP_LISTENER,
        useFactory: bootstrapComponentsFactory,
        deps: [ApplicationRef, ThemeService],
        multi: true
    }
];

function initializeAppMeta(): () => void {
    return () => inject(Meta).addTags(appMeta);
}

function initTheme(): () => Promise<void> {
    return () =>
        runInInjectionContext(inject(EnvironmentInjector), () => {
            const themeService = inject(ThemeService);
            if (themeService.isBrowser) {
                return themeService.SetTheme(themeService.Theme, themeService.IsDarkMode);
            }
            return Promise.resolve();
        });
}
