import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from 'src/app/components/title/title.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, TitleModule, MatButtonModule, MatMenuModule, MatIconModule, FlexLayoutModule],
  exports: [AboutComponent]
})
export class AboutModule { }
