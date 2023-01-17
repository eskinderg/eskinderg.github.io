import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertInComponent } from './expert-in.component';
import { MasteryModule } from 'src/app/components/mastery/mastery.module';
import { TitleModule } from 'src/app/components/title/title.module';

@NgModule({
  declarations: [ExpertInComponent],
  imports: [CommonModule, MasteryModule, TitleModule],
  exports: [ExpertInComponent]
})
export class ExpertInModule { }
