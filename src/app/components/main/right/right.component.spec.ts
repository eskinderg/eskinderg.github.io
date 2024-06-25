import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponent } from './right.component';
import { ComponentsModule } from '../../app/components.module';
import { ThemeService } from 'src/app/theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { findComponent } from 'src/app/app.component.spec';

describe('RightComponent', () => {
    let component: RightComponent;
    let fixture: ComponentFixture<RightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RightComponent],
            imports: [ComponentsModule],
            providers: [
                ThemeService,
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
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

    it('renders langselect component', () => {
        const langSelectComponent = findComponent(fixture, 'app-langselect');
        expect(langSelectComponent).toBeTruthy();
    });

    it('renders toggle component', () => {
        const toggleComponent = findComponent(fixture, 'app-toggle');
        expect(toggleComponent).toBeTruthy();
    });
});
