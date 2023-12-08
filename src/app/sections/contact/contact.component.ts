import { ViewChild, ElementRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent extends BaseComponent implements  OnInit {

  public message = {
    name: '',
    email: '',
    message: ''
  };

  public currentAppVersion: string;

  @ViewChild('contact') override section: ElementRef;

  ngOnInit() {
    this.currentAppVersion = environment.appVersion;
  }

  public get Copyright(): string {
    if ((this.lang.texts)?.footer.content) {
      return (this.lang.texts)?.footer.content
    }
    else {
      return new Date().getFullYear().toString();
    }
  }

}
