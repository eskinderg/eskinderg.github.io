import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, SeparatorModule],
  exports: [IntroComponent]
})
export class IntroModule { }
