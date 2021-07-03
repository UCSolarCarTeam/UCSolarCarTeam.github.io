import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { EditSponsorsComponent } from './edit-sponsors/edit-sponsors.component';
import { EditNewsComponent } from './edit-news/edit-news.component';

import { environment } from 'src/environments/environment';
import { SponsorsService } from './services/sponsors.service';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    MainComponent,
    EditTeamComponent,
    EditSponsorsComponent,
    EditNewsComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
  ],
  providers: [
    SponsorsService,
  ],
  bootstrap: [PortalComponent]
})
export class PortalModule { }
