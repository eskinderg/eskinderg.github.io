import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    imports: [CommonModule, MatTooltipModule],
    exports: [CommonModule, MatTooltipModule],
    providers: [provideAnimationsAsync()]
})
export class MatModule {}
