import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      window["plugins"].OneSignal.startInit("8c300567-43e1-4214-9a86-6866e6bb734e", "441146784699")
  	  .handleNotificationOpened((jsonData) => {
        alert("Push Success! "+JSON.stringify(jsonData));
      }).endInit();
  });

  }

}

