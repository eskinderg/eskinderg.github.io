import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from 'src/app/components/title/title.module';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, TitleModule, MatButtonModule, MatMenuModule],
  exports: [AboutComponent]
})
export class AboutModule { }
