import { APP_INITIALIZER, FactoryProvider } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { appMeta } from "./app.meta";
import { ThemeService } from "./providers/theme.service"

function initializeApp(themeService: ThemeService, meta: Meta) {
  return () => {
    meta.addTags(appMeta)
    themeService.LoadTheme();
  }
}

export const appProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  deps: [ThemeService, Meta],
  multi: true
}
