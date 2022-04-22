import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  exports: [IntroComponent]
})
export class IntroModule { }
