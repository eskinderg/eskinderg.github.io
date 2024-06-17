import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ThemeService {
  private colorList: any;

  private defaultTheme: string = 'indigo';

  public static DarkModeDefault: boolean = true;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  @Output() themeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {}

  public get DarkMode(): boolean {
    if (localStorage.getItem('darkmode')) {
      return localStorage.getItem('darkmode') === 'true';
    } else {
      return ThemeService.DarkModeDefault;
    }
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
    this.setStyle('theme', `${theme}.css`);
    this.DarkMode = isDarkMode;
    this.Theme = theme;
    this.themeChange.emit();
  }

  public get DarkModeBackground1(): string {
    return '#1c2128';
  }

  public get DarkModeBackground2(): string {
    return '#22272e';
  }

  private checkPreviousConvention() {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme').includes('-theme')) {
        localStorage.setItem('theme', localStorage.getItem('theme').replace('-theme', ''));
      }
    }
  }

  setStyle(key: string, href: string): void {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  private getLinkElementForKey(key: string): Element {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string): Element {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`) as Element;
  }

  createLinkElementWithKey(key: string): Element {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('type', 'text/css');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }
}
