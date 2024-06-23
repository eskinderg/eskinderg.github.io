import { APP_INITIALIZER, NgModule } from '@angular/core';
import { LanguageService } from '../providers/language.service';

@NgModule({
    providers: [
        LanguageService,
        {
            provide: APP_INITIALIZER,
            useFactory: (languageService: LanguageService) => () => languageService.loadLanguages(),
            deps: [LanguageService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (languageService: LanguageService) => () =>
                languageService.setLanguage(languageService.Language),
            deps: [LanguageService],
            multi: true
        }
    ]
})
export class LanguageModule {}
