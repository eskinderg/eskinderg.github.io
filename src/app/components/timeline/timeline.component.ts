import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { LanguageService } from 'src/app/providers/language.service';
import { TitleComponent } from '../title/title.component';

@Component({
  standalone: true,
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  imports: [
    CommonModule,
    MatDividerModule,
    MatLegacyChipsModule,
    TitleComponent
  ]
})
export class TimelineComponent {

  @Input() job: any;
  @Input() index: any;
  @Input() reverse: boolean;

  constructor(public portfolio: LanguageService) { }

}
