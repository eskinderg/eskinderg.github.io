import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponent } from './right.component';
import { ThemeService } from 'src/app/theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { findComponent } from 'src/app/app.component.spec';
import { MenuComponent } from '../menu/menu.component';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('RightComponent', () => {
    let component: RightComponent;
    let fixture: ComponentFixture<RightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RightComponent, MenuComponent],
            providers: [
                ThemeService,
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                provideExperimentalZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should render langselect component', () => {
        const langSelectComponent = findComponent(fixture, 'app-lang-dropdown');
        expect(langSelectComponent).toBeTruthy();
    });

    it('Should render toggle component', () => {
        const toggleComponent = findComponent(fixture, 'app-toggle');
        expect(toggleComponent).toBeTruthy();
    });

    it('Should render menu component', () => {
        const toggleComponent = findComponent(fixture, 'app-menu');
        expect(toggleComponent).toBeTruthy();
    });
});
