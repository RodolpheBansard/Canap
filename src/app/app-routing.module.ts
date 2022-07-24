import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AngularFireAuthGuard, canActivate, redirectLoggedInTo} from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  { path:'login', component: LoginComponent, data: { authGuardPipe: redirectLoggedInTo } },
  { path:'dashboard', component: DashboardComponent , canActivate: [AngularFireAuthGuard]},
  { path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
