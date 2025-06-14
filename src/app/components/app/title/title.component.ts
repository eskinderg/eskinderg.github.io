import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.scss'],
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {
    platformId = inject(PLATFORM_ID);

    @Input() title: any = '';
    @Input() lineWidth = 0;
    @Input() color = '#abe074';
    @Input() fontFamily = '';
    @Input() fontWeight = '400';
    @Input() fontSize = '400';
    @Input() stylish: boolean = false;
    @Input() inverse = false;
    @Input() strokeWidth: number = 7;
    @Input() anchor: string;

    public direction = '';
    public data: any;

    ngOnInit() {
        this.data = {
            value: this.inverse ? 'right' : 'left',
            params: {
                width: this.lineWidth,
                width2: Math.round(this.lineWidth * 0.2),
                width8: Math.round(this.lineWidth * 0.8)
            }
        };
    }
}
