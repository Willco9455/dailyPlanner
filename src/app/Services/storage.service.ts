import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

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





}
