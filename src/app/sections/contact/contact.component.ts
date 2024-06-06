import {
  ViewChild,
  ElementRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent extends BaseComponent implements OnInit, AfterViewInit {
  public message = {
    name: '',
    email: '',
    message: ''
  };

  public currentAppVersion: string;

  @ViewChild('contact') section: ElementRef;

  ngAfterViewInit(): void {
    this.lang.sections['contact'] = this.section;
  }

  ngOnInit() {
    this.currentAppVersion = environment.appVersion;
  }

  public get Copyright(): string {
    if (this.lang.texts.footer.content) {
      return this.lang.texts.footer.content;
    } else {
      return new Date().getFullYear().toString();
    }
  }
}
