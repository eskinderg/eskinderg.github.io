import { ViewChild, ElementRef, Component, AfterViewInit } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  public message = {
    name: '',
    email: '',
    message: ''
  };

  @ViewChild('contact') contactSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

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
