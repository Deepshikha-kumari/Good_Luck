import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { SigninComponent } from './signin/signin.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { Routes,RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {  NgForm }  from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { SafePipe } from '././service/safe.pipe';
import { Safe1Pipe } from './safe1.pipe';
import { FindPartnerComponent } from './find-partner/find-partner.component';
import { CateringComponent } from './catering/catering.component';
import { WeddingVenueComponent } from './wedding-venue/wedding-venue.component';
// const appRoutes: Routes = [
//   { path: '',redirectTo: '/index', pathMatch: 'full'},
//   { path: 'index',component:IndexComponent},
//   { path: 'about',component:AboutComponent},
//   { path: 'contact',component:ContactComponent},
//   { path: 'price',component:PricingComponent},
//   { path: 'signin',component:SigninComponent},
//   { path: '**',component:ErrorComponent},
  
//   ];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    SigninComponent,
    IndexComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    RegistrationComponent,
    SafePipe,
    Safe1Pipe,
    FindPartnerComponent,
    CateringComponent,
    WeddingVenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
