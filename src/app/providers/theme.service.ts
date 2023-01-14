
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {

  private colorList: any;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {
    // this.getColorList().subscribe({
    //   next: data => {
    //     this.colorList = data["colors"]
    //     console.log(data)
    //   },
    //   error: err => console.error(err)
    // });

    const colorPath = 'assets/json/colors.json';

    this.http.get<[]>(colorPath).subscribe(colors => {
      this.colorList = colors['colors']
    })

    this.setStyle('theme', 'blue.css');

  }

  get Theme() {
    return localStorage.getItem('theme');
  }

  set Theme(theme: any) {
    localStorage.setItem('theme', theme);
  }

  get Colors() {
    return this.colorList;
  }

  setStyle(key: string, href: string): void {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  removeStyle(key: string): void {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  getLinkElementForKey(key: string): Element {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  getExistingLinkElementByKey(key: string): Element {
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

  getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }

}
