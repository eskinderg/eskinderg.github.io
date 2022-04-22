import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {

  @Input() public spiedTags = [];

  @Output() public sectionChange = new EventEmitter<string>();

  private currentSection: string;

  constructor(private _el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    let currentSection: string;
    const children = this._el.nativeElement.children;
    const scrollTop = document.documentElement.scrollTop;
    const parentOffset = document.documentElement.offsetTop;

    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset - 400) <= scrollTop) {
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
