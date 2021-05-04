import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { ProjectsComponent } from '../components/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
