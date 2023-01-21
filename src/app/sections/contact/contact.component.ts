import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef, Component, AfterViewInit, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { LanguageService } from 'src/app/providers/language.service';
import { environment } from 'src/environments/environment';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    SeparatorComponent
  ]
})
export class ContactComponent implements AfterViewInit, OnInit {

  public message = {
    name: '',
    email: '',
    message: ''
  };

  public currentAppVersion: string;

  @ViewChild('contact') contactSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

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
