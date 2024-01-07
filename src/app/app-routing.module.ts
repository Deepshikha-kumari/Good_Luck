import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutHimComponent } from './aboutHim/aboutHim.component';
import { AppComponent } from './app.component';
import { CateringComponent } from './catering/catering.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { FindPartnerComponent } from './find-partner/find-partner.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { WeddingVenueComponent } from './wedding-venue/wedding-venue.component';
import { PrivacyPolicyComponent } from './privacy-Policy/privacy-policy.component';
import { TermsServicesComponent } from './terms&Services/terms-service.component';
import { EventPlannerGuideComponent } from './Event&Planner-Guide/event-planner-guide.component';
import { SpecialServicesComponent } from './Special-Services/special-services.component';
import { SiteMapComponent } from './SiteMap/SiteMap.component';



const routes: Routes = [
  { path: '',redirectTo: '/index', pathMatch: 'full'},
{ path: 'index',component:IndexComponent},
{ path: 'abouthim',component:AboutHimComponent},
{ path: 'about',component:AboutComponent},
{ path: 'contact',component:ContactComponent},
{ path: 'price',component:PricingComponent},
{ path: 'find',component:FindPartnerComponent},
{ path: 'wedding',component:WeddingVenueComponent},
{ path: 'catering',component:CateringComponent},
{ path: 'signin',component:SigninComponent},
{ path: 'signin/login/signin',component:SigninComponent},
{path: 'signin/login',component:LoginComponent},
{path: 'registration',component:RegistrationComponent},
{path: 'privacypolicy',component:PrivacyPolicyComponent},
{path: 'termsservice',component:TermsServicesComponent},
{path: 'eventplannerguide',component:EventPlannerGuideComponent},
{path: 'specialservices',component:SpecialServicesComponent},
{path: 'sitemap',component:SiteMapComponent},


{ path: '**',component:ErrorComponent},

];

@NgModule({
   imports: [ RouterModule.forRoot(routes),],
  //imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]

 
})
export class AppRoutingModule { }
