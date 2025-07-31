import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WrapperRefService {
    wrapperElementRef?: ElementRef<HTMLElement>;

    setWrapperRef(ref: ElementRef<HTMLElement>) {
        this.wrapperElementRef = ref;
    }

    getChildren(): HTMLCollection | null {
        return this.wrapperElementRef?.nativeElement.children || null;
    }
}
