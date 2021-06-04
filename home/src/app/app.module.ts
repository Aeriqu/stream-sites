import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPaneComponent } from './intro-pane/intro-pane.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubtitlePaneComponent } from './subtitle-pane/subtitle-pane.component';
import { ProfilePaneComponent } from './profile-pane/profile-pane.component';
import { CreditPaneFloatComponent } from './credit-pane-float/credit-pane-float.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountdownComponent } from './countdown/countdown.component';
import { PasswordAccessDialogComponent } from './password-access-dialog/password-access-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPaneComponent,
    SubtitlePaneComponent,
    ProfilePaneComponent,
    CreditPaneFloatComponent,
    CountdownComponent,
    PasswordAccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    // Angular
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
