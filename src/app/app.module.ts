import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {  MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { ExperienceComponent } from './experience/experience.component';
import { Routes } from '@angular/router';
import { HomeService } from './home/home.service';
import { APP_CONFIG, AppConfig } from './app.config';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioService } from './portfolio/portfolio.service';
import { ContactMeService } from './contact-me/contact-me.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    FooterComponent,
    HeaderComponent,
    ExperienceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'your key here'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    HomeService,
    PortfolioService,
    ContactMeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
