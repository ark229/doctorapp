import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Notification} from "../../model/Notification";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {


  notifications: Array<Notification> = [{
    title: 'Lab Test Results',
    description: 'Your lab results are ready. Please schedule a call with Dr. Melissa Hyman at Riverside Family Practice Center as soon as possible. - Sarah Brinkly, R.N. ',
    date_time: Date()
  },
    
    {
      title: 'Time for your annual physical',
      description: 'Your annual physical is just around the corner. Schedule your appointment today!',
      date_time: Date()
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
