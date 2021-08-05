import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPaneComponent } from './intro-pane/intro-pane.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubtitlePaneComponent } from './subtitle-pane/subtitle-pane.component';
import { ProfilePaneComponent } from './profile-pane/profile-pane.component';
import { CreditPaneFloatComponent } from './credit-pane-float/credit-pane-float.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditSubSectionComponent } from './credit-sub-section/credit-sub-section.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPaneComponent,
    SubtitlePaneComponent,
    ProfilePaneComponent,
    CreditPaneFloatComponent,
    CreditSubSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    // Angular
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
