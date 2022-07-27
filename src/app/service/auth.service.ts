import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {DashboardService} from "./dashboard.service";
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  displayNameLetter?: string = '';
  userUid? :string = '';

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    public dashboardService : DashboardService,
    private activatedRoute : ActivatedRoute) {

    auth.onAuthStateChanged((user) => {
      if(user){
        this.userUid = user.uid
      }
    })
    this.auth.user.subscribe((user) => {
      if (user) {
        this.displayNameLetter = user.displayName?.charAt(0);
        if(this.router.url.includes('login')){
          this.router.navigateByUrl('dashboard');
        }

      }
    })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
