import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard/dashboard-card/dashboard-card.component';
import {CommonModule} from "@angular/common";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AddGameComponent } from './components/add-game/add-game.component';
import { HeaderComponent } from './components/header/header.component';
import { FileDropDirective } from './components/add-game/file-drop.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddGameNightComponent } from './components/add-game-night/add-game-night.component';
import { GameNightNameComponent } from './components/add-game-night/game-night-name/game-night-name.component';
import { GameNightNumberInputComponent } from './components/add-game-night/game-night-number-input/game-night-number-input.component';
import { GameNightCreateTeamComponent } from './components/add-game-night/game-night-create-team/game-night-create-team.component';
import { GameNightAddGameComponent } from './components/add-game-night/game-night-add-game/game-night-add-game.component';
import { GameNightSaveComponent } from './components/add-game-night/game-night-save/game-night-save.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import {NgxEmojiPickerModule} from "ngx-emoji-picker";
import { StepperComponent } from './components/add-game-night/stepper/stepper.component';
import {CardItemMenuComponent} from "./components/dashboard/dashboard-card/card-item-menu/card-item-menu.component";
import { RunGameNightComponent } from './components/run-game-night/run-game-night.component';
import { GameNightSummaryComponent } from './components/run-game-night/game-night-summary/game-night-summary.component';
import { GameRoundScoreComponent } from './components/run-game-night/game-round-score/game-round-score.component';
import { GameNightTotalScoreComponent } from './components/run-game-night/game-night-total-score/game-night-total-score.component';
import { TeamEmojiPickerComponent } from './components/run-game-night/game-round-score/team-emoji-picker/team-emoji-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardCardComponent,
    AddGameComponent,
    HeaderComponent,
    FileDropDirective,
    AddGameNightComponent,
    GameNightNameComponent,
    GameNightNumberInputComponent,
    GameNightCreateTeamComponent,
    GameNightAddGameComponent,
    GameNightSaveComponent,
    PrimaryButtonComponent,
    StepperComponent,
    CardItemMenuComponent,
    RunGameNightComponent,
    GameNightSummaryComponent,
    GameRoundScoreComponent,
    GameNightTotalScoreComponent,
    TeamEmojiPickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEmojiPickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
