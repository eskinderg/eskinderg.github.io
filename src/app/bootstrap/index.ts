import { ApplicationRef, ComponentRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { Components } from './components';
import { ThemeService } from '../theme/theme.service';

export function bootstrapComponentsFactory(
    appRef: ApplicationRef,
    themeService: ThemeService
): (appComponentRef: ComponentRef<AppComponent>) => void {
    return (appComponentRef: ComponentRef<AppComponent>) => {
        const viewContainer = appComponentRef.instance.dynamicComponentsWrapper.viewContainerRef;
        const hostElement = appComponentRef.instance.dynamicComponentsWrapper.wrapperElementRef.nativeElement;

        Components.forEach((component) => {
            const compRef = viewContainer.createComponent(component, {
                environmentInjector: appRef.injector
            });

            // Append the component's DOM element inside the wrapper div
            hostElement.appendChild(compRef.location.nativeElement);
        });
        if (themeService.isBrowser) {
            requestAnimationFrame(() => {
                const body = document.getElementById('app-body');
                const loading = document.getElementById('loading');
                if (body) {
                    setTimeout(() => {
                        body.style.transition = 'opacity 0.25s ease';
                        body.style.opacity = '1';
                        if (loading) loading.remove();
                    }, 500);
                }
            });
        }
    };
}
