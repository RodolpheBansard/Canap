import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../model/game";
import {DashboardService} from "../../service/dashboard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent {
  addGameForm: FormGroup;

  uploadImageUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private fb: FormBuilder,
              private storage: AngularFireStorage,
              private dashBoardService: DashboardService,
              private router: Router) {
    this.addGameForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  onInputChange(event: any){
    const fileList = event.target.files;
    this.fileUpload(fileList);
  }

  fileUpload(fileList: FileList){
    if(fileList.length === 1){
      Array.from(fileList).forEach((file) => {
        if(file.size < 1000000){
          const filePath = file.name;
          const fileRef = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);

          task.snapshotChanges().pipe(
            finalize(() => {
              let url = fileRef.getDownloadURL().toPromise();
              url.then((imageUrl) => {
                this.uploadImageUrl.next(imageUrl)
              })
            } )
          ).subscribe();
        }
        else{
          console.log('too big, limit is 1MB')
        }
      })
    }
    else{
      console.log('just one file please')
    }
  }

  onSubmit(){
    let game : Game = {
      imageUrl: this.uploadImageUrl.getValue(),
      name:this.addGameForm.get('name')?.value,
      description:this.addGameForm.get('description')?.value
    }
    this.dashBoardService.addGame(game).subscribe(() => {
      this.router.navigateByUrl('dashboard');
    })
  }

  get name(){
    return this.addGameForm.get('name')
  }
  get description(){
    return this.addGameForm.get('description')
  }
}
