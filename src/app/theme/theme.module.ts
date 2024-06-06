import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ThemeService } from '../providers/theme.service';

@NgModule({
  providers: [
    ThemeService,
    {
      provide: APP_INITIALIZER,
      useFactory: (themeService: ThemeService) => () => themeService.LoadTheme(),
      deps: [ThemeService],
      multi: true
    }
  ]
})
export class ThemeModule {}
