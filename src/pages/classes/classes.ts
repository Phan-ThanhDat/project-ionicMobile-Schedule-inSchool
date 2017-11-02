import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import { ClassesData } from './classes.data';

@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html'
})
export class ClassesPage {
  campus: string = "ICT-CITY";
  group: string = "PINFOS 16";
  event = {
    date: '2017-05-01'
  };
  storage: Storage;
  mockClassesData = new ClassesData();

  mode: string = "daily";
  classesDailyTableHtml = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    this.storage = storage;
    this.storage.get('campus').then((val) => {
      val != null ? this.campus = val : '';
    }).then(() => {
      this.storage.get('group').then((val) => {
        val != null ? this.group = val : '';
      }).then(() => {
        this.storage.get('date').then((val) => {
          val != null ? this.event.date = val : '';
        }).then(() => {
          this.classesDailyTableHtml = this.getTableHtml(this.mockClassesData.getData(this.event.date));
        })
      })
    });

  }

  getTableHtml(obj) {
    let resultHTML:string = "<table class=\"time-table\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">";
    resultHTML += '<tr><th width="30%"></th><th>' + obj.dayOfWeek + '<br/>' + this.event.date +'</th></tr>';

    for (let i=0; i<12; i++) {
      let col2 = "";

      if (obj[i] == null && typeof obj[i] !== "undefined" ) {
        col2 += "<td></td>";
      } else if(typeof obj[i] === 'undefined') {
      } else {
        col2 += "<td rowspan=\"" + obj[i].rowspan + "\">";
        col2 += obj[i].content;
        col2 += "</td>";
      }

      resultHTML += `<tr> <td width="30%">` + this.mockClassesData.getTimePeriod(i) + `</td>` + col2 + `</tr>`;
    }

    resultHTML += "</table>";
    return resultHTML;
  }

}
