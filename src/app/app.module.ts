import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationInfoComponent } from './components/education-info/education-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CarouselModule } from '@coreui/angular';
import { ProjectInfoComponent } from './components/project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EducationComponent,
    EducationInfoComponent,
    ProjectsComponent,
    ProjectInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTabsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
