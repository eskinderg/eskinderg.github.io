import { NgModule                                             }from '@angular/core';
import { CommonModule                                         }from '@angular/common';
import { OutlineComponent                                     }from './outline';
import { ScrollSpyDirective } from 'src/app/providers/scroll-spy-directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ OutlineComponent, ScrollSpyDirective ],
  exports:      [ OutlineComponent, ScrollSpyDirective ]
})

export class OutlineModule {}
