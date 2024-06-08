import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './providers/language.service';
import { ThemeService } from './providers/theme.service';
import { FrontModule } from './components/main/front.module';
import { SectionsModule } from './sections/sections.module';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from './language/language.mock';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, HttpClientModule, SectionsModule, FrontModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: LanguageService,
          useClass: LanguageServiceMock
        },
        ThemeService,
        GoogleAnalyticsService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('renders language select', () => {
    const langSelect = findComponent(fixture, 'app-langselect');
    expect(langSelect).toBeTruthy();
  });

  it('renders speed dial button component', () => {
    const speedDial = findComponent(fixture, 'app-speed-dial-fab');
    expect(speedDial).toBeTruthy();
  });

  it('renders app menu', () => {
    const menu = findComponent(fixture, 'app-menu');
    expect(menu).toBeTruthy();
  });

  it('renders outline menu', () => {
    const outline = findComponent(fixture, 'app-outline');
    expect(outline).toBeTruthy();
  });

  it('renders intro section', () => {
    const intro = findComponent(fixture, 'app-intro');
    expect(intro).toBeTruthy();
  });
});

export function findComponent<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}
