import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { ThreadComponent } from './room/thread/thread.component';
import { GifComposeComponent } from './room/gif-compose/gif-compose.component';
import { GifComponent } from './room/thread/gif/gif.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    ThreadComponent,
    GifComposeComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
