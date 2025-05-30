import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { TimelineComponent } from './timeline.component';
import { TitleComponent } from '../title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { ChipComponent } from '../chip/chip.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, TimelineComponent, TitleComponent, ChipComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        component.job = {
            title: 'Freelance Web Developer (Full Stack)',
            subtitle: 'Elance',
            year: 'Sept 2018 - Present',
            intro: 'Freelance',
            elements: [
                {
                    type: 'list',
                    header: 'Key responsibilities include, but not limited to:',
                    list: [
                        'Provided support for different websites ',
                        'Created Single Page Applications by using web technologies like HTML5, SASS, Typescript, Angular2 and Bootstrap.',
                        'Created and used Reducers that received Actions to modify the store State.',
                        'Created custom NPM modules.',
                        'Developed administrative UI Components using Angular2+, Typescript and Webpack',
                        'Used Bootstrap for Responsive Web design.',
                        'Optimized Front-End assets for speed and performance',
                        'Used Middleware, Redux-Promise in an application to retrieve data from Back-End RESTFUL service.',
                        'Created custom Angular Components including Breadcrumbs, Reactive Forms, Form Validators, Tabbed Components and Toggle Buttons.'
                    ]
                }
            ],
            used: ['Angular', 'Typescript', 'JQuery', 'Java Script', 'Bootstrap', 'Node JS', 'HTML5', 'Sass']
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
