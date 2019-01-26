import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { AlertComponent } from './alert/alert.component';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    ContactComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'map', component: MapComponent}
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
