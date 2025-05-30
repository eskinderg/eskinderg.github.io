import { Injectable, EventEmitter, Output, Inject, DOCUMENT } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ThemeMode } from './theme.mode';

@Injectable()
export class ThemeService {
    public static defaultTheme: string = 'blue';
    public static DarkModeDefault: ThemeMode = 'system';

    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    private darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    private colorList: any;

    handleDarkModeChange = (event: any) => {
        if (this.ThemeMode === 'system') {
            this.SetTheme(this.Theme, event.matches);
        }
    };

    constructor(
        public http: HttpClient,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.darkModeMediaQuery.addEventListener('change', this.handleDarkModeChange);
    }

    private get SystemDarkMode(): boolean {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    public get ThemeMode(): ThemeMode {
        return (localStorage.getItem('thememode') as ThemeMode) ?? ThemeService.DarkModeDefault;
    }

    get IsDarkMode(): boolean {
        if (this.ThemeMode === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else if (this.ThemeMode === 'dark') {
            return true;
        } else {
            return false;
        }
    }

    public set ThemeMode(value: ThemeMode) {
        localStorage.setItem('thememode', value.toString());
    }

    public ToggleDarkMode(): ThemeMode {
        return this.ThemeMode;
    }

    public get Theme(): string {
        return localStorage.getItem('theme') ?? ThemeService.defaultTheme;
    }

    public set Theme(theme: string) {
        localStorage.setItem('theme', theme);
    }

    get Colors() {
        return this.colorList;
    }

    private setUserPreferenceTheme(): void {
        this.SetAppTheme(this.Theme, this.ThemeMode);
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

    public SetAppTheme(theme: string, themeMode: ThemeMode) {
        switch (themeMode) {
            case 'system':
                this.SetTheme(theme, this.SystemDarkMode);
                break;
            case 'light':
                this.SetTheme(theme, false);
                break;
            case 'dark':
                this.SetTheme(theme, true);
                break;
        }
        this.ThemeMode = themeMode;
    }

    /**
     * Set the theme for the app
     * @param {string} theme - name of the theme to be assigned. Eg indigo, yellow, red ....
     * @param {boolean} isDarkMode - Sets the dark mode setting
     */
    private SetTheme(theme: string, isDarkMode: boolean) {
        this.document.documentElement.className = theme;

        if (isDarkMode) {
            const root = this.document.querySelector(':root');
            root.classList.toggle('dark');
        }
        this.Theme = theme;
    }
}
