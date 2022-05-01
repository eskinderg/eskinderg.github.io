import { HostListener, ViewChild, Component, OnInit, ElementRef, Input } from '@angular/core';
// import { style, state, animate, transition, trigger } from '@angular/animations';
import { LanguageService } from 'src/app/providers/language.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss']
})
export class OutlineComponent implements OnInit {

  @Input() currentSection = 'section1';
  @ViewChild('outline') _selector: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngOnInit() { }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element: any) {
    const section = this.portfolio.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // onHover(link) {
  // this.hovered = link;
  // }

  onMouseOut() {
    // this.hovered = '';
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el = this._selector.nativeElement;
    window.scrollY > window.innerHeight - 150 ? jQuery(el).fadeIn(500) : jQuery(el).fadeOut(500);
  }

}
