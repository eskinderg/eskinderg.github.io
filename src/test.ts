import { EventEmitter } from '@angular/core';

import en from './assets/json/lang/en.json';
import languageList from './assets/json/lang.json';
import { of } from 'rxjs';
import { LanguageService } from './app/providers/language.service';

if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string): MediaQueryList =>
            ({
                matches: false,
                media: query,
                onchange: null,
                addListener: () => undefined,
                removeListener: () => undefined,
                addEventListener: () => undefined,
                removeEventListener: () => undefined,
                dispatchEvent: () => false
            }) as MediaQueryList
    });
}

if (!globalThis.ResizeObserver) {
    class ResizeObserverMock {
        observe() {
            return undefined;
        }
        unobserve() {
            return undefined;
        }
        disconnect() {
            return undefined;
        }
    }

    Object.defineProperty(globalThis, 'ResizeObserver', {
        writable: true,
        configurable: true,
        value: ResizeObserverMock
    });
}

if (!Element.prototype.scrollIntoView) {
    Object.defineProperty(Element.prototype, 'scrollIntoView', {
        writable: true,
        configurable: true,
        value: () => undefined
    });
}

globalThis.fail = (message?: string): never => {
    throw new Error(message ?? 'Test failed');
};

export const testLanguageService: Partial<LanguageService> = {
    httpChange: new EventEmitter<boolean>(),
    languageChange: new EventEmitter<object>(),
    menu: new EventEmitter<any>(),
    sections: {},
    toggleMenu: vi.fn(),
    texts: en,
    LanguageList: languageList,
    Language: 'en',
    loadLanguages: () => of(languageList),
    translateColor: vi.fn()
};
