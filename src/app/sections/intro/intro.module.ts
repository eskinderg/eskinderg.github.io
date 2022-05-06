import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSlideToggleModule, SeparatorModule],
  exports: [IntroComponent]
})
export class IntroModule { }
