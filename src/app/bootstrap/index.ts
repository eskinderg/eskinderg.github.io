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
                const loading = document.getElementById('loading');
                if (loading) {
                    loading.style.transition = 'opacity 0.5s ease';
                    loading.style.opacity = '0';
                    setTimeout(() => loading.remove(), 500);
                }
            });
        }
    };
}
