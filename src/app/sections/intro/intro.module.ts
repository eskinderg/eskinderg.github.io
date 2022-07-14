import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { SeparatorModule } from 'src/app/components/separator/separator.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    SeparatorModule
  ],
  exports: [IntroComponent]
})
export class IntroModule { }
