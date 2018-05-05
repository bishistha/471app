import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Common } from '../../providers/common'
import { PushObject, PushOptions } from '@ionic-native/push';
import { Platform } from 'ionic-angular';
import { DeviceDataProvider } from '../../providers/device-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: any = LoginPage;
  data:string = '';

  constructor(private navController: NavController,
    private navParams: NavParams,
    private common: Common,
    public platform: Platform,
    private loadingController: LoadingController,
    public alertCtrl: AlertController,
    public deviceDataProvider: DeviceDataProvider) {
    //console.log(this.navController.id);

    this.data = this.deviceDataProvider.getData();
  }
  

  ionViewCanEnter() {
    //console.log("is logged in", this.borrowerProvider.getIsLogin());

  }

  ionViewDidLoad() {

  }


}
