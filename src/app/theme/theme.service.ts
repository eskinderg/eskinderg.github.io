import { Injectable, EventEmitter, Output, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ThemeService {
    private colorList: any;
    private defaultTheme: string = 'indigo';
    public static DarkModeDefault: boolean = true;

    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public http: HttpClient,
        @Inject(DOCUMENT) private document: Document
    ) {}

    public get DarkMode(): boolean {
        return JSON.parse(localStorage.getItem('darkmode')) ?? ThemeService.DarkModeDefault;
    }

    public set DarkMode(value: boolean) {
        localStorage.setItem('darkmode', value.toString());
    }

    public ToggleDarkMode(): boolean {
        this.DarkMode = !this.DarkMode;
        return this.DarkMode;
    }

    public get Theme(): string {
        return localStorage.getItem('theme') ?? this.defaultTheme;
    }

    public set Theme(theme: string) {
        localStorage.setItem('theme', theme);
    }

    get Colors() {
        return this.colorList;
    }

    private setUserPreferenceTheme(): void {
        this.checkPreviousConvention();
        this.SetTheme(this.Theme, this.DarkMode);
    }

    public LoadTheme(): Observable<any> {
        this.setUserPreferenceTheme();

        const colorPath = 'assets/json/colors.json';

        return this.http.get(colorPath).pipe(
            map((colors) => {
                this.colorList = colors['colors'];
            }),
            catchError((error) => {
                console.error(error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Set the theme for the app
     * @param {string} theme - name of the theme to be assigned. Eg indigo, yellow, red ....
     * @param {boolean} isDarkMode - Sets the dark mode setting
     */
    public SetTheme(theme: string, isDarkMode: boolean) {
        this.document.documentElement.className = theme;

        if (isDarkMode) {
            const root = this.document.querySelector(':root');
            root.classList.toggle('dark');
        }
        this.DarkMode = isDarkMode;
        this.Theme = theme;
    }

    private checkPreviousConvention() {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme').includes('-theme')) {
                localStorage.setItem('theme', localStorage.getItem('theme').replace('-theme', ''));
            }
        }
    }
}
