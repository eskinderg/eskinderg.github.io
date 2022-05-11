import { NgModule                                             }from '@angular/core';
import { CommonModule                                         }from '@angular/common';
import { OutlineComponent                                     }from './outline';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ScrollSpyDirective } from 'src/app/providers/scroll-spy-directive';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [ OutlineComponent, ScrollSpyDirective ],
  exports:      [ OutlineComponent, ScrollSpyDirective ]
})

export class OutlineModule {}
