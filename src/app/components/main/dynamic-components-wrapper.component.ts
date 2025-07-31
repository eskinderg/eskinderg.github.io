import {
    Component,
    ViewChild,
    ViewContainerRef,
    ElementRef,
    ChangeDetectionStrategy,
    inject
} from '@angular/core';
import { WrapperRefService } from './wrapper-ref.service';

@Component({
    selector: 'app-dynamic-wrapper',
    templateUrl: './dynamic-components-wrapper.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentsWrapperComponent {
    private wrapperService: WrapperRefService = inject(WrapperRefService);
    private _wrapperElementRef?: ElementRef<HTMLElement>;

    @ViewChild('componentsWrapper', { read: ViewContainerRef, static: true })
    viewContainerRef!: ViewContainerRef;

    @ViewChild('componentsWrapper', { read: ElementRef, static: true })
    set wrapperElementRef(ref: ElementRef<HTMLElement>) {
        this._wrapperElementRef = ref;
        this.wrapperService.setWrapperRef(ref);
    }

    get wrapperElementRef() {
        return this._wrapperElementRef!;
    }

    get injectedChildren(): HTMLCollection {
        return this.wrapperElementRef.nativeElement.children;
    }
}
