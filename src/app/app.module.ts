import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlideshowModule} from 'ng-simple-slideshow';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'private-policy', component: PrivatePolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    PrivatePolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
