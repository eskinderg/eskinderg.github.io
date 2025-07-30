/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, PLATFORM_ID, InjectionToken, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// Define a mock Storage interface for the server environment
//
const MOCK_STORAGE: Storage = {
    length: 0,
    clear: () => {},
    getItem: (key: string) => null, // Always return null on server
    key: (index: number) => null,
    removeItem: (key: string) => {},
    setItem: (key: string, value: string) => {}
};

// Define an InjectionToken for localStorage
export const LOCAL_STORAGE = new InjectionToken<Storage>('Local Storage', {
    providedIn: 'root',
    factory: () => {
        const platformId = inject(PLATFORM_ID);
        // Provide window.localStorage if in browser, otherwise provide the MOCK_STORAGE
        return isPlatformBrowser(platformId) ? window.localStorage : MOCK_STORAGE;
    }
});

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private storage: Storage;

    constructor() {
        this.storage = inject(LOCAL_STORAGE);
    }

    setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
    }

    // Optional: check if native localStorage is available
    isBrowser(): boolean {
        return this.storage === window.localStorage;
    }
}
