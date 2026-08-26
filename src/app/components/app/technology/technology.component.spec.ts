import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { TechnologyComponent } from './technology.component';
import { LanguageService } from '../../../providers/language.service';
import { LanguageServiceMock } from '../../../language/language.mock';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TechnologyComponent', () => {
    let component: TechnologyComponent;
    let fixture: ComponentFixture<TechnologyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TechnologyComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                provideZonelessChangeDetection()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TechnologyComponent);
        component = fixture.componentInstance;
        component.item = {
            title: 'Angular',
            img: 'bg-angular',
            link: 'https://angular.io'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
