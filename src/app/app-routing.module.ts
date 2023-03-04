import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
