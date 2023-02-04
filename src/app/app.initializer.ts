import { APP_INITIALIZER, FactoryProvider } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { LanguageService } from "./providers/language.service";
import { appMeta } from "./app.meta";
import { ThemeService } from "./providers/theme.service"

export const AppInit: FactoryProvider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ThemeService, Meta],
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeUserLanguage,
    deps: [LanguageService],
    multi: true
  },
  {
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

function initializeApp(themeService: ThemeService): () => Promise<void> {
  return () =>
    new Promise((resolve) => {
      themeService.LoadTheme().subscribe(() => {
        resolve()
      })
    })
}

function initializeUserLanguage(languageService: LanguageService): () => Promise<void> {
  return () =>
    new Promise((resolve) => {
      languageService.setLanguage(languageService.Language).subscribe(() => {
        resolve()
      })
    })
}

function initializeLanguageList(languageService: LanguageService): () => Promise<void> {
  return () =>
    new Promise((resolve) => {
      languageService.loadLanguages().subscribe(() => {
        resolve()
      })
    })
}

function initializeAppMeta(meta: Meta): () => Promise<void> {
  return () =>
    new Promise((resolve) => {

      meta.addTags(appMeta)
      resolve()
    })
}
