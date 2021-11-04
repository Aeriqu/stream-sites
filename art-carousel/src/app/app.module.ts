import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ArtComponent } from './art/art.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtService } from './art-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    OverlayComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
