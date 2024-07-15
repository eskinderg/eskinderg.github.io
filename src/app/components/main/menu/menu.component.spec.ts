import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';

import { MenuComponent } from './menu.component';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { TooltipModule } from '../../app/tooltip/tooltip.module';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuComponent],
            imports: [TooltipModule],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
