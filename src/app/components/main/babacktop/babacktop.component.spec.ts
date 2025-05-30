import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ThemeService } from 'src/app/theme/theme.service';
import { BaBackTopComponent } from './babacktop.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { By } from '@angular/platform-browser';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BackTopComponent', () => {
    let component: BaBackTopComponent;
    let fixture: ComponentFixture<BaBackTopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BaBackTopComponent);
        component = fixture.componentInstance;
        component._selector = fixture.debugElement.queryAll(By.css('.ba-back-top')).at(0).nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        // component._onClick();
        component.ngOnInit();
        expect(component).toBeTruthy();
    });
});
