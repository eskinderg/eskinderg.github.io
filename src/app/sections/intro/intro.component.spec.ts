import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';

import { IntroSectionComponent } from './intro.component';
import { AppModule } from 'src/app/app.module';
import { LanguageServiceMock } from 'src/app/language/language.mock';

describe('IntroSectionComponent', () => {
    let component: IntroSectionComponent;
    let fixture: ComponentFixture<IntroSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IntroSectionComponent],
            imports: [AppModule],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(IntroSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create IntroSectionComponent', () => {
        expect(component).toBeDefined();
    });

    it('Should rendere name Eskinder Getahun', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.intro>.titleIntro>.introTitle').textContent).toBe(
            ' Eskinder Getahun '
        );
    });

    it('Should render subtitle Full-Stack Developer', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.intro>.titleIntro>.introSubTitle').textContent).toBe(
            'Full-Stack Developer'
        );
    });
});
