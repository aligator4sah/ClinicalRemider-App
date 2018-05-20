import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams, Platform, ViewController} from "ionic-angular";

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
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Description
        </ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <span ion-text color="primary" showWhen="ios">Cancel</span>
            <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-avatar item-start>
            <ion-icon name="clipboard" large></ion-icon>
          </ion-avatar>
          <h2>{{note.title}}</h2>
          <p>{{"Doctor: " + note.doctor}}</p>
        </ion-item>
        <ion-item>
          Start Time:
          <ion-note item-end>
            {{note.startTime}}
          </ion-note>
        </ion-item>
        <ion-item>
          End Time:
          <ion-note item-end>
            {{note.endTime}}
          </ion-note>
        </ion-item>
        <ion-item>
          Description
          <p padding-top>{{note.description}}</p>
        </ion-item>
      </ion-list>
    </ion-content>

  `
})
export class Details implements OnInit {
  note;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  ngOnInit() {
    const notes = [
      {
        title: 'Diabetes control 1',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
      {
        title: 'Diabetes control 2',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
      {
        title: 'Diabetes control 3',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
    ];

    this.note = notes[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
