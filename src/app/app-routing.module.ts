import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AngularFireAuthGuard, canActivate, redirectLoggedInTo} from "@angular/fire/compat/auth-guard";
import {AddGameComponent} from "./components/add-game/add-game.component";

const routes: Routes = [
  { path:'login', component: LoginComponent, data: { authGuardPipe: redirectLoggedInTo } },
  { path:'dashboard', component: DashboardComponent , canActivate: [AngularFireAuthGuard]},
  { path:'add-game', component: AddGameComponent , canActivate: [AngularFireAuthGuard]},
  { path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
