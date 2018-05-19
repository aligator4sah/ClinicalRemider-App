import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReminderList} from "../reminderList/reminderList";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }

  gotoList(event) {
    this.navCtrl.push(ReminderList);
  }

}
