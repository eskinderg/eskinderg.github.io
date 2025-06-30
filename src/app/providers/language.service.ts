import { Injectable, EventEmitter, Output, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable, map, tap, catchError, throwError, timeout } from 'rxjs';

@Injectable()
export class LanguageService {
    http = inject(HttpClient);

    public texts: any;
    public colors: any;
    public loading = true;
    public sections = {};
    public menuVisible = false;
    private langList: any;

    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    @Output() languageChange: EventEmitter<object> = new EventEmitter<object>();

    @Output() public httpChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    set Language(lang: any) {
        this.setLanguage(lang).subscribe({
            next: () => localStorage.setItem('language', lang)
        });
    }

    get Language() {
        return localStorage.getItem('language') ?? navigator.language;
    }

    get LanguageList() {
        return this.langList;
    }

    get DefaultLanguage(): string {
        return 'en';
    }

    public setLanguage(lang: any): Observable<any> {
        return this.http.get(this.getLangPath(lang)).pipe(
            timeout(5000),
            tap((data) => {
                this.texts = data;
                this.languageChange.emit(data);
            }),
            catchError((httpError: HttpErrorResponse) => {
                if (httpError.status === 404) {
                    return this.setLanguage(this.DefaultLanguage);
                }
                alert(`Unable to set language\n${httpError.message}`);
                return throwError(() => httpError);
            })
        );
    }

    private getLangPath(lang: any): string {
        if (!isDevMode()) {
            return `assets/json/lang/${lang || 'en'}.min.json`;
        } else {
            return `assets/json/lang/${lang || 'en'}.json`;
        }
    }

    public translateColor(color: string): string {
        return this.texts.colors && this.texts.colors[`${color.toLowerCase()}`]
            ? this.texts.colors[`${color.toLowerCase()}`]
            : color;
    }

    toggleMenu(value: any) {
        if (value || value === false) {
            this.menuVisible = value;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.menuVisible != this.menuVisible;
        }

        this.menu.emit(this.menuVisible);
    }

    getColorList() {
        const colorPath = 'assets/json/colors.json';
        return this.http.get<[]>(colorPath);
    }

    public loadLanguages(): Observable<any> {
        const langPath = 'assets/json/lang.json';

        return this.http.get(langPath).pipe(
            map((lang) => {
                this.langList = lang;
            })
        );
    }
}
