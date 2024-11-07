import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyComponent } from './technology.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

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
                provideExperimentalZonelessChangeDetection()
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
        expect(component).toBeTruthy();
    });
});
