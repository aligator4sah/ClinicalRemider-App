import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReminderList} from "../reminderList/reminderList";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login implements OnInit{

  private loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  gotoList(event) {
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    let user = {name: username, password: password};
    console.log(user);
    //TODO: pass login information to the backend

    this.navCtrl.push(ReminderList);
  }

}
