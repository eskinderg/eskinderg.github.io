import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [
    'APP-INTRO',
    'APP-ABOUT',
    'APP-EXPERT-IN',
    'APP-ACCOMPLISHMENTS',
    'APP-EXPERIENCE',
    'APP-EDUCATION-CONFERENCES',
    'APP-CONTACT'
  ];

  @Output() public sectionChange: EventEmitter<string> = new EventEmitter<string>();

  public currentSection: string;

  constructor(private _el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentSection: string;
    const children = this._el.nativeElement.children;
    const scrollTop = document.documentElement.scrollTop;
    const parentOffset = document.documentElement.offsetTop;

    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset - 400 <= scrollTop) {
          currentSection = element.id;
        }
      }
    }

    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
