import { HostListener, ViewChild, Component, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { BaseComponent } from '../../../sections/base.component';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineComponent extends BaseComponent {

  @Input() currentSection = 'section1';
  @ViewChild('outline') _selector: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef) }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element: any) {
    const section = this.portfolio.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    this._selector.nativeElement.style.display = window.scrollY > window.innerHeight - 150 ? 'block' : 'none'
  }

}
