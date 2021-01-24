import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LatestNewsareaComponent } from './latest-newsarea/latest-newsarea.component';
import { ThumbnailSliderAreaComponent } from './thumbnail-slider-area/thumbnail-slider-area.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from 'src/app/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestNewsareaComponent,
    ThumbnailSliderAreaComponent,
    ContentbodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
