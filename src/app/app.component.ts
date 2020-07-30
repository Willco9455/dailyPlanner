import { Component, PlatformRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TimeService } from './Services/time.service';
import { ActionsService } from './Services/actions.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private timeService: TimeService,
    private actionsService: ActionsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.timeService.startTimer();
    this.platform.ready().then(() => {
      // LOCAL STORAGE
      // this.actionsService.fetchActions();
    });
  }

}
