import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Action } from '../Pages/to-do/item.model';
import { ActionsService } from './actions.service';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  storeData(storing: any ) {
    this.nativeStorage.setItem('stored', storing)
    .then(
      () => console.log('Stored item!', storing),
      error => console.error('Error storing item', error)
    );
  }

  retriveData() {
    return this.nativeStorage.getItem('stored');
  }



}
