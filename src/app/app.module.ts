import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SkillsPage } from '../pages/skills/skills';
import { SkillsPageModule } from '../pages/skills/skills.module';
import { StudiesPageModule } from '../pages/studies/studies.module';
import { StudiesPage } from '../pages/studies/studies';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';

import { Geolocation } from '@ionic-native/geolocation';
import { OpenWeatherProvider } from '../providers/open-weather/open-weather';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SkillsPageModule, 
    StudiesPageModule, 
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SkillsPage,
    StudiesPage,
    TabsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    OpenWeatherProvider,
    HttpClient
    
  ]
})
export class AppModule {}
