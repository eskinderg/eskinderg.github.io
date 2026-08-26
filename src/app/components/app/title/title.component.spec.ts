import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';
import { TitleComponent } from './title.component';
import { LanguageServiceMock } from '../../../language/language.mock';
import { provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TitleComponent', () => {
    let component: TitleComponent;
    let fixture: ComponentFixture<TitleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                provideZonelessChangeDetection(),
                ThemeService
            ],
            imports: [BrowserAnimationsModule, TitleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TitleComponent);
        component = fixture.componentInstance;
        component.title = 'title';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should render title', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title>.main-heading-title').textContent).toContain('title');
    });
});
