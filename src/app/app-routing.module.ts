import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { SupportUsMainComponent } from './components/support-us-page/support-us-main/support-us-main.component';

const routes: Routes = [
    { path: 'cars', component: CarsComponent },
    { path: 'support-us', component: SupportUsComponent },
    { path: 'sponsors', component: SponsorsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
