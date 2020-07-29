import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActionsService } from './actions.service';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage, private actionsService: ActionsService) { }

  storeData(storing: object) {
    this.nativeStorage.setItem('stored', storing)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }

  retriveData() {
    this.nativeStorage.getItem('stored')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

  storeActions() {
    this.nativeStorage.setItem('actions', this.actionsService.actions)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }

  fetchActions() {
    this.nativeStorage.getItem('actions')
      .then(
        data => this.actionsService.actions = data,
        error => console.error(error)
      );

  }





}
