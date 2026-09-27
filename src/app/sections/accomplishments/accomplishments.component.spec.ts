import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { AccomplishmentsSectionComponent } from './accomplishments.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { ElementRef, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../assets/json/lang/en.json';
import languageList from '../../../assets/json/lang.json';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AccomplishmentsSectionComponent', () => {
    let component: AccomplishmentsSectionComponent;
    let fixture: ComponentFixture<AccomplishmentsSectionComponent>;
    let languageService: LanguageService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AccomplishmentsSectionComponent, TitleComponent],
            providers: [
                LanguageService,
                ThemeService,
                GoogleAnalyticsService,
                provideHttpClient(),
                provideHttpClientTesting(),
                provideZonelessChangeDetection()
            ]
        }).compileComponents();

        languageService = TestBed.inject(LanguageService);
        httpController = TestBed.inject(HttpTestingController);

        fixture = TestBed.createComponent(AccomplishmentsSectionComponent);
        component = fixture.componentInstance;

        languageService.loadLanguages().subscribe(() => {
            languageService.setLanguage('en').subscribe(() => {
                expect(languageService.Language).toBe('en');
            });
        });

        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/en.json');
        expect(req2.request.method).toBe('GET');
        req2.flush(en);
        fixture.detectChanges();
    });

    it('should create accomplishmentssectioncomponent', async () => {
        fixture.detectChanges();

        // 2. Verify the component is created
        expect(component).toBeTruthy();

        await fixture.whenStable();
        // 3. Explicitly read the signal value to trigger coverage recognition
        // console.log(component.section.nativeElement.innerHTML)
        const sectionElement = component.section;
        expect(sectionElement).toBeDefined();
        expect(sectionElement).toBeInstanceOf(ElementRef);

        // 4. Verify the side-effect in ngAfterViewInit occurred
        expect(languageService.sections['accomplishments']).toBe(component.section);
    });
});
