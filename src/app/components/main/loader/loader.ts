import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.html',
    styleUrls: ['./loader.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass]
})
export class LoaderComponent extends BaseComponent {
    @Input() Loading: boolean = false;
}
