import { ApplicationRef, ComponentRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { Components } from './components';

export function bootstrapComponentsFactory(
    appRef: ApplicationRef
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
    };
}
