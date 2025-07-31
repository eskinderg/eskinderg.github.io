import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    private _isBrowser: boolean;
    private platformId = inject(PLATFORM_ID);

    constructor() {
        this._isBrowser = isPlatformBrowser(this.platformId);
    }

    getItem(key: string): string | null {
        if (this.isBrowser) {
            return localStorage.getItem(key);
        }
        return null;
    }

    setItem(key: string, value: string): void {
        if (this.isBrowser) {
            localStorage.setItem(key, value);
        }
    }

    get isBrowser(): boolean {
        return this._isBrowser;
    }
}
