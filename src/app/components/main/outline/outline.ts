import {
  HostListener,
  ViewChild,
  Component,
  ElementRef,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineComponent {
  @Input() currentSection = '';
  @ViewChild('outline') _selector: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService
  ) {}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element: any) {
    const section = this.lang.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    this._selector.nativeElement.style.display = window.scrollY > window.innerHeight - 150 ? 'block' : 'none';
  }
}
