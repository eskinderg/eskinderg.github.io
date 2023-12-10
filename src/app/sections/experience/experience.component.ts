import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('experience') section: ElementRef;

  ngAfterViewInit(): void {
    this.lang.sections['experience'] = this.section;
  }

}
