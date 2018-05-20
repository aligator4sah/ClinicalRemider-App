import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams, Platform, ViewController} from "ionic-angular";
import {ReminderService} from "../../service/reminder.service";

@Component({
  templateUrl: 'reminderList.html'
})
export class ReminderList {

  constructor(public modalCtrl: ModalController) {}

  openModal(characterNum) {
    console.log(characterNum);
    let modal = this.modalCtrl.create(Details, characterNum);
    modal.present();
  }
}

@Component({
  templateUrl: 'detail.html',
})

export class Details implements OnInit {
  note;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private remindService: ReminderService,
  ) {}

  ngOnInit() {
    let notes = this.remindService.getNotes();
    this.note = notes[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
