import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { GuardService } from './services/guard.service';
import { NewsService } from './services/news.service';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LatestNewsareaComponent } from './latest-newsarea/latest-newsarea.component';
import { ThumbnailSliderAreaComponent } from './thumbnail-slider-area/thumbnail-slider-area.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { BusinessComponent } from './header/Catagories/business/business.component';
import { EntertainmentComponent } from './header/Catagories/entertainment/entertainment.component';
import { GeneralComponent } from './header/Catagories/general/general.component';
import { HealthComponent } from './header/Catagories/health/health.component';
import { SportsComponent } from './header/Catagories/sports/sports.component';
import { ScienceComponent } from './header/Catagories/science/science.component';
import { TechnologyComponent } from './header/Catagories/technology/technology.component';

const approutes : Routes= [
  {
     path : 'login' , 
     component : LoginComponent
  },
  {
       path : 'dashboard',
       component : DashboardComponent,
       canActivate : [GuardService]
  },
  {
    path : 'content',
    component : ContentbodyComponent
  
  },
  {
    path : 'business',
    component : BusinessComponent

  },
  {
    path : 'entertainment',
    component : EntertainmentComponent
  },
  {
    path : 'general',
    component : GeneralComponent
  },
  
  {
    path : 'health',
    component : HealthComponent
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  }
      ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LatestNewsareaComponent,
    ThumbnailSliderAreaComponent,
    ContentbodyComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    SportsComponent,
    ScienceComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
