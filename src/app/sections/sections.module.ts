import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/app/components.module';
import { AboutSectionComponent } from './about/about.component';
import { AccomplishmentsSectionComponent } from './accomplishments/accomplishments.component';
import { ContactSectionComponent } from './contact/contact.component';
import { EducationConferencesSectionComponent } from './education-conferences/education-conferences.component';
import { ExperienceSectionComponent } from './experience/experience.component';
import { ExpertInSectionComponent } from './expert-in/expert-in.component';
import { IntroSectionComponent } from './intro/intro.component';

@NgModule({
  imports: [ComponentsModule],
  declarations: [
    IntroSectionComponent,
    ExperienceSectionComponent,
    AboutSectionComponent,
    EducationConferencesSectionComponent,
    AccomplishmentsSectionComponent,
    ContactSectionComponent,
    ExpertInSectionComponent
  ],
  exports: [
    IntroSectionComponent,
    ExperienceSectionComponent,
    AboutSectionComponent,
    EducationConferencesSectionComponent,
    AccomplishmentsSectionComponent,
    ContactSectionComponent,
    ExpertInSectionComponent
  ]
})
export class SectionsModule {}
