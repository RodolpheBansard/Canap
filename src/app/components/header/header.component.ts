import {Component, Input} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  isLogoVisible : boolean = true;

  @Input()
  isSettingsVisible : boolean = true;


  constructor(
    public authService: AuthService) {
  }

  logout(){
    this.authService.logout();
  }
}
