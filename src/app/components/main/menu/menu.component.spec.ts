import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from 'src/app/providers/language.service';

import { MenuComponent } from './menu.component';
import { LanguageServiceMock } from 'src/app/language/language.mock';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MenuComponent],
    imports: [MatTooltipModule],
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
