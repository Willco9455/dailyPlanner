import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  storeData() {
    this.nativeStorage.setItem('stored', {
      property: [
      {
        name: 'weired',
        deadline: 'seven',
        completed: false
      },
      {
        name: 'not weired',
        deadline: 'tweleve',
        completed: false
      }],
      anotherProperty: 'anotherValue'
    })
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
