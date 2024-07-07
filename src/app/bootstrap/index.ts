import { ApplicationRef, ComponentRef, createComponent } from '@angular/core';
import { AppComponent } from '../app.component';
import { Components } from './components';

export function bootstrapComponentsFactory(
    appRef: ApplicationRef
): (appComponentRef: ComponentRef<AppComponent>) => void {
    return (appComponentRef: ComponentRef<AppComponent>) => {
        Components.forEach((component) => {
            const compRef = createComponent(component, {
                environmentInjector: appRef.injector
            });
            appRef.attachView(compRef.hostView);
            appComponentRef.instance
                .appComponentWrapper()
                .nativeElement.append(compRef.location.nativeElement);
        });
    };
}
