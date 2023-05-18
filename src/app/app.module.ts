import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { SerieUserComponent } from './components/serie-user/serie-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';
import { SerieComponent } from './components/serie/serie.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    SeriesComponent,
    UserComponent,
    SerieUserComponent,
    LogInComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
