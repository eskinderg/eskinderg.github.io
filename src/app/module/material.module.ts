import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    imports: [CommonModule, MatTooltipModule, MatDividerModule, MatCardModule],
    exports: [CommonModule, MatTooltipModule, MatDividerModule, MatCardModule],
    providers: [provideAnimationsAsync()]
})
export class MatModule {}
