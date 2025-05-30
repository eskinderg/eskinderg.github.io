import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { TitleComponent } from './title.component';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { provideZonelessChangeDetection } from '@angular/core';

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
