import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ActivatedRoute, Router} from "@angular/router";
import firebase from 'firebase/compat/app';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  displayNameLetter?: string = '';

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private activatedRoute : ActivatedRoute) {

    this.auth.user.subscribe((user) => {
      if (user) {
        this.displayNameLetter = user.displayName?.charAt(0);
        if(this.router.url.includes('login')){
          this.router.navigateByUrl('dashboard');
        }

      }
    })
  }

  getUserId(): Observable<string>{
    return this.auth.user.pipe(map((user) => {
      if(user){
        return user?.uid;
      }
      else{
        return '';
      }
    }))
  }


  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
