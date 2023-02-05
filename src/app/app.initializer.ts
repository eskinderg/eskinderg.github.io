import { APP_INITIALIZER, Provider } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { LanguageService } from "./providers/language.service";
import { appMeta } from "./app.meta";
import { ThemeService } from "./providers/theme.service"
import { Observable } from "rxjs";

export const AppInit: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ThemeService, Meta],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: initializeUserLanguage,
    deps: [LanguageService],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: initializeLanguageList,
    deps: [LanguageService],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: initializeAppMeta,
    deps: [Meta],
    multi: true
  }
]

function initializeApp(themeService: ThemeService): () => Observable<boolean> {
  return () => themeService.LoadTheme()
}

function initializeUserLanguage(languageService: LanguageService): () => Observable<boolean> {
  return () => languageService.setLanguage(languageService.Language)
}

function initializeLanguageList(languageService: LanguageService): () => Observable<boolean> {
  return () => languageService.loadLanguages();
}

function initializeAppMeta(meta: Meta): () => HTMLMetaElement[] {
  return () => meta.addTags(appMeta)
}
