import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import {Storage} from '@ionic/storage';

import { CampusLocations } from '../../lib/campus-location';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  campus: string = "LEMMINKÄISENKATU";
  group: string = "PINFOS 16";
  event = {
    date: '2017-04-01'
  };
  storage: Storage;
  campusLocations = new CampusLocations();
  geolocation = new Geolocation();

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    this.storage = storage;

    let date = new Date();
    this.event.date = date.getFullYear().toString();

    let month = date.getMonth() + 1;
    month < 10 ? this.event.date += '-0' : this.event.date += '-';
    this.event.date += month;

    let day = date.getDate();
    day < 10 ? this.event.date += '-0' : this.event.date += '-';
    this.event.date += day;


    this.storage.get('campus').then((val) => {
      val != null ? this.campus = val : '';
    });

    this.storage.get('group').then((val) => {
      val != null ? this.group = val : '';
    });

    this.storage.get('date').then((val) => {
      val != null ? this.event.date = val : '';
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Home');
  }

  saveOptions() {
    this.storage.ready().then(() => {
      this.storage.set('campus', this.campus);
      this.storage.set('group', this.group);
      this.storage.set('date', this.event.date);
    });

    this.goToTabsPage();
  }

  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

  getAutoLocation () {
    this.geolocation.getCurrentPosition().then((resp) => {
      const x1 = resp.coords.longitude;
      const y1 = resp.coords.latitude;
      const data = this.campusLocations.data;

      let len = Object.keys(data).length;
      for (let i=1; i<=len ;i++) {
        const x2 = data[i].longtitude;
        const y2 = data[i].latitude;
        const distance = Math.sqrt( Math.pow((y2-y1),2) + Math.pow((x2-x1),2) );
        if(distance <= data[i].radius) {
          this.campus = data[i].campus;
        }
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
