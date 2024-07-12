import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DropDownMenuComponent } from './dropdown.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('DropdownComponent', () => {
    let component: DropDownMenuComponent;
    let fixture: ComponentFixture<DropDownMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropDownMenuComponent],
            imports: [MatTooltipModule],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                ThemeService,
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DropDownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
