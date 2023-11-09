import { ViewChild, ElementRef, Component, AfterViewInit, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { environment } from 'src/environments/environment';
import { ThemeService } from 'src/app/providers/theme.service';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent extends BaseComponent implements AfterViewInit, OnInit {

  public message = {
    name: '',
    email: '',
    message: ''
  };

  public currentAppVersion: string;

  @ViewChild('contact') contactSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef) }

  ngOnInit() {
    this.currentAppVersion = environment.appVersion;
  }

  ngAfterViewInit() {
    this.portfolio.sections['contact'] = this.contactSection;
  }

  public get Copyright(): string {
    if ((this.portfolio.texts)?.footer.content) {
      return (this.portfolio.texts)?.footer.content
    }
    else {
      return new Date().getFullYear().toString();
    }
  }

}
