import { Service } from '@angular/core';
import { ElementRef } from '@angular/core';

@Service()
export class WrapperRefService {
    wrapperElementRef?: ElementRef<HTMLElement>;

    setWrapperRef(ref: ElementRef<HTMLElement>) {
        this.wrapperElementRef = ref;
    }

    getChildren(): HTMLCollection | null {
        return this.wrapperElementRef?.nativeElement.children || null;
    }
}
