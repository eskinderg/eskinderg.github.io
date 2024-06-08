import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

import { IntroSectionComponent } from './intro.component';
import { AppModule } from 'src/app/app.module';
import { LanguageServiceMock } from 'src/app/language/language.mock';

describe('IntroSectionComponent', () => {
  let component: IntroSectionComponent;
  let fixture: ComponentFixture<IntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroSectionComponent],
      providers: [
        {
          provide: LanguageService,
          useClass: LanguageServiceMock
        },
        ThemeService
      ],
      imports: [HttpClientModule, AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create IntroSectionComponent', () => {
    expect(component).toBeDefined();
  });

  it('Should have the intro title rendere name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.intro>.titleIntro>.introTitle').textContent).toContain('Eskinder Getahun');
  });

  it('Should render intro subtitle', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.intro>.titleIntro>.introSubTitle').textContent).toContain('Full-Stack Develope');
  });

});
