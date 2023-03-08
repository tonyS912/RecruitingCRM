import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firespaß mit Angular 15 und TypeScript
import { environment } from 'src/environment/environment'; //da wo unser schmutz drin ist
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; //damit mein angular mit firebase klar kommt
import { provideAuth, getAuth } from '@angular/fire/auth'; //damit mein angular mit authetication klar kommt
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; //damit mein angular firestore zeugs lesen kann
import { provideStorage, getStorage } from '@angular/fire/storage';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImprintComponent } from './components/policity/imprint/imprint.component';
import { DataProtectionComponent } from './components/policity/data-protection/data-protection.component';
import { AlarmComponent } from './components/push-message/alarm/alarm.component';
import { PushMessageComponent } from './components/push-message/push-message.component'; //damit mein angular storage zeugs lesen kann

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ImprintComponent,
    DataProtectionComponent,
    AlarmComponent,
    PushMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), //hier wird die app initialisiert
    provideAuth(() => getAuth()), //hier wird authetication initialisiert
    provideFirestore(() => getFirestore()), //hier wird firestore initialisiert
    provideStorage(() => getStorage()) //hier wird storage initialisiert
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
