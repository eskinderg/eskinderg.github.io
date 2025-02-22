import {
    ElementRef,
    Component,
    OnInit,
    ChangeDetectionStrategy,
    AfterViewInit,
    viewChild
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/app/sections/base.component';
import { NgStyle } from '@angular/common';
import Geezify from 'geezify-js';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgStyle]
})
export class ContactSectionComponent extends BaseComponent implements OnInit, AfterViewInit {
    public message = {
        name: '',
        email: '',
        message: ''
    };

    public currentAppVersion: string;

    section = viewChild.required<ElementRef>('contact');

    ngAfterViewInit(): void {
        this.lang.sections['contact'] = this.section;
    }

    ngOnInit() {
        this.currentAppVersion = environment.appVersion;
    }

    public get Version(): string {
        return this.currentAppVersion;
    }

    public get Year(): string {
        if (this.lang.Language === 'am') {
            const geezify = Geezify.create();
            return geezify.toGeez(new Date().getFullYear() - 8).toString();
        } else {
            return this.Copyright;
        }
    }

    public get Copyright(): string {
        if (this.lang.texts.footer.content) {
            return this.lang.texts.footer.content;
        } else {
            return new Date().getFullYear().toString();
        }
    }
}
