import { Component, ElementRef, ViewChild, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomplishmentsSectionComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('accomplishments') section: ElementRef;

  ngAfterViewInit(): void {
    this.lang.sections['accomplishments'] = this.section;
  }
}
