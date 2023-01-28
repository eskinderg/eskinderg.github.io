import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {

  private colorList             : any;
  private defaultTheme          : string = "blue";
  public static DarkModeDefault : boolean = false;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {

    const colorPath = 'assets/json/colors.json';

    this.http.get<[]>(colorPath).subscribe(colors => {
      this.colorList = colors['colors']
    })
  }

  public get DarkMode(): boolean {
    return localStorage.getItem('darkmode') === 'true' || ThemeService.DarkModeDefault
  }

  public set DarkMode(value: boolean) {
    localStorage.setItem('darkmode', value.toString());
  }

  public ToggleDarkMode(): boolean {
    this.DarkMode = !this.DarkMode;
    // this.LoadTheme(this.DarkMode);
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

  public LoadTheme(): void {

    this.checkPreviousConvention();

    if (this.DarkMode) {
      this.LoadDarkMode();
    } else {
      this.SetTheme(this.Theme, false)
    }
  }

  public SetTheme(theme: string, isDarkMode: boolean) {

    if (isDarkMode) {
      this.setStyle('theme', `${theme}.css`);
    } else {
      this.setStyle('theme', `${theme}.css`);
      this.Theme = theme;
    }

    this.DarkMode = isDarkMode;
  }

  private LoadDarkMode() {
    this.SetTheme('dark', true);
  }

  public get DarkModeBackground1(): string {
    return '#1c2128';
  }

  public get DarkModeBackground2(): string {
    return '#22272e';
  }

  private checkPreviousConvention() {

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme').includes("-theme")) {
        localStorage.setItem('theme', localStorage.getItem('theme').replace('-theme', ''))
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
    linkEl.setAttribute('type', 'text/css')
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }

}
