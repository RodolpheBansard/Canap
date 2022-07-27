import { Pipe, PipeTransform } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  constructor(private storage: AngularFireStorage) {
  }

  transform(imageUrl: string): Observable<any> {
    const ref = this.storage.ref(imageUrl);
    return  ref.getDownloadURL();
  }

}
