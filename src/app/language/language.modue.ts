import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { LanguageService } from '../providers/language.service';

@NgModule({
    providers: [
        LanguageService,
        provideAppInitializer(() => inject(LanguageService).loadLanguages()),
        provideAppInitializer(() => inject(LanguageService).setLanguage(inject(LanguageService).Language))
    ]
})
export class LanguageModule {}
