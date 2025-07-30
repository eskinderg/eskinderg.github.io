import { ApplicationRef, ComponentRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { Components } from './components';

export function bootstrapComponentsFactory(
    appRef: ApplicationRef
): (appComponentRef: ComponentRef<AppComponent>) => void {
    return (appComponentRef: ComponentRef<AppComponent>) => {
        const hostViewContainer = appComponentRef.instance.dynamicComponentsHost;
        Components.forEach((component) => {
            hostViewContainer.createComponent(component, {
                environmentInjector: appRef.injector
            });
            // appRef.attachView(compRef.hostView);
            // appComponentRef.instance
            //     .appComponentWrapper()
            //     .nativeElement.append(compRef.location.nativeElement);
        });
    };
}
