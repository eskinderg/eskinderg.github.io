import { ApplicationRef, ComponentRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { Components } from './components';
import { ThemeService } from '../theme/theme.service';
import { FadeInDirective } from '../providers/scroll-fade.directive';
import { SeparatorComponent } from '../components/app/separator/separator.component';

export function bootstrapComponentsFactory(
    appRef: ApplicationRef,
    themeService: ThemeService
): (appComponentRef: ComponentRef<AppComponent>) => void {
    return (appComponentRef: ComponentRef<AppComponent>) => {
        const viewContainer = appComponentRef.instance.dynamicComponentsWrapper.viewContainerRef;
        const hostElement = appComponentRef.instance.dynamicComponentsWrapper.wrapperElementRef.nativeElement;

        Components.forEach((component) => {
            const compRef = viewContainer.createComponent(component, {
                environmentInjector: appRef.injector,
                directives: [FadeInDirective]
            });

            compRef.location.nativeElement.style.display = 'block';
            compRef.location.nativeElement.style.transition = 'background 1s ease';
            compRef.location.nativeElement.style.background = compRef.instance.separator.fillColor1;
            hostElement.appendChild(compRef.location.nativeElement);

            if (compRef.instance.hasSeparator === true) {
                const sepRef = viewContainer.createComponent(SeparatorComponent, {
                    environmentInjector: appRef.injector
                });
                sepRef.setInput('fillColor1', compRef.instance.separator.fillColor1);
                sepRef.setInput('fillColor2', compRef.instance.separator.fillColor2);
                // hostElement.style.background = compRef.instance.separator.fillColor2;
                // hostElement.style.background = 'red';
                // compRef.location.nativeElement.style.background = compRef.instance.separator.fillColor1;
                // compRef.location.nativeElement.style.background = 'red';
                // compRef.location.nativeElement.style.border = '2px solid red';
                hostElement.appendChild(sepRef.location.nativeElement);
            }
        });

        if (themeService.isBrowser) {
            requestAnimationFrame(() => {
                const loadingBar = document.getElementById('loading-bar');
                if (loadingBar) {
                    setTimeout(() => loadingBar.remove(), 500);
                }
            });
        }
    };
}
