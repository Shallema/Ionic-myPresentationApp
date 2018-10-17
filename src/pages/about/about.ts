import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';

import * as moment from 'moment';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  lat: any;
  lng: any;

  weatherData: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private openweatherProvider: OpenWeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    //loc en dur
    /*this.openweatherProvider.forecast(40.7109945, -74.004355).subscribe((json) => {
      this.weatherData = json;
      console.log(this.weatherData);
    });*/

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.openweatherProvider.forecast(this.lat, this.lng).subscribe((json) => {
        this.weatherData = json;
        console.log(this.weatherData);
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  formateDate(str: string): string {
    let dateMoment = moment(str);
    return dateMoment.format("dddd hh:mm");
  }

}
