import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { SeparatorModule } from 'src/app/components/separator/separator.module';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

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
