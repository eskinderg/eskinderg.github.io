
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {

  private colorList: any;
  private defaultTheme: string = "blue";

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {

    const colorPath = 'assets/json/colors.json';

    this.http.get<[]>(colorPath).subscribe(colors => {
      this.colorList = colors['colors']
    })
  }

  public get Theme(): string {
    return localStorage.getItem('theme') ?? this.defaultTheme ;
  }

  public set Theme(theme: string) {
    this.setStyle('theme', `${theme}.css`);
    localStorage.setItem('theme', theme);
  }

  get Colors() {
    return this.colorList;
  }

  public LoadTheme(): void {
    this.Theme = this.Theme;
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
