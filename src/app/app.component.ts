import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hasJoined = false;
  user = '';

  onJoin(user: string) {
    this.hasJoined = true;
    this.user = user;
  }
}
