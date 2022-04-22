import {ViewChild, AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit{

  @ViewChild('about') aboutSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.portfolio.sections['about'] = this.aboutSection;
  }

}
