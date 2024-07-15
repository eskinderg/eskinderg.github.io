import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';
import { ComponentsModule } from '../components.module';
import { ThemeService } from 'src/app/theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TooltipModule } from '../tooltip/tooltip.module';

describe('ToggleComponent', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentsModule, TooltipModule],
            declarations: [ToggleComponent],
            providers: [ThemeService, provideHttpClient(withInterceptorsFromDi())]
        }).compileComponents();

        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
