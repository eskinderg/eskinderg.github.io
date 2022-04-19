import { BrowserModule                           }from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler }from '@angular/core';
import { AppComponent                            }from './app';
import { HttpClientModule                        }from '@angular/common/http';
import { BrowserAnimationsModule                 }from '@angular/platform-browser/animations';
import { Shared                                  }from './providers/shared';
import { environment                             }from '../environments/environment';
import { ServiceWorkerModule                     }from '@angular/service-worker';
import { FlexLayoutModule                        }from '@angular/flex-layout';
import { FormsModule                             }from '@angular/forms';
import { MenuModule, OutlineModule               }from './components/index';
import {
  AboutModule, ExpertinModule,
  ContactModule, AccomplishmentsModule,
  EducationConferencesModule, ExperienceModule,
  VideoModule, ProjectsModule
} from './sections/index';
import { ScrollTrigger              }from './providers/scrollTrigger';
import { BrowserTransferStateModule }from '@angular/platform-browser';
import { BaBackTopModule            }from './components/babacktop/babacktop.module';
import { ThemeService               }from './providers/theme.service';
import {
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatDividerModule
} from '@angular/material';
import { SpeedDialFabComponent }from './components/speeddial/speed-dial-fab.component';
import { ScrollSpyDirective    }from './providers/scroll-spy-directive';
import { LanguageService       }from './providers/language.service';
import { TranslatePipe         }from './providers/pipe.langague';
import { LangSelectComponent   }from './components/langselect/langselect';
/*
import { RouterModule } from '@angular/router';
import { Routing } from './app.routes';
*/
  /*
  import * as Raven from 'raven-js';

Raven
  .config('https://4cbb01e3731e4f0bbf13b4ce25b16fba@sentry.io/145646')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError);
  }
}*/

export function setupLanguageFactory( service: LanguageService): Function {
  return () => service.use('en');
}

  @NgModule({
    declarations: [
      AppComponent, SpeedDialFabComponent, LangSelectComponent, ScrollSpyDirective, TranslatePipe
    ],
    imports: [
      BrowserModule.withServerTransition({appId: 'portfolio'}),
      BrowserTransferStateModule,
      BrowserAnimationsModule,
      HttpClientModule,
      BaBackTopModule,
      MatButtonModule, MatMenuModule, MatSelectModule, MatIconModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatDividerModule,
      // RouterModule.forRoot( Routing ),
      MenuModule, VideoModule, OutlineModule,
      AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, ProjectsModule,
      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    exports :[
      TranslatePipe
    ],
    providers: [
      LanguageService ,{
        provide: APP_INITIALIZER,
        useFactory: setupLanguageFactory,
        deps: [ LanguageService ],
        multi: true
      }

    , Shared , ScrollTrigger, ThemeService
      // { provide: ErrorHandler, useClass: RavenErrorHandler }
    ],
    bootstrap: [ AppComponent ]
  })
export class AppBrowserModule {}
