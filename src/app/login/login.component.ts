import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userInput: string;

  @Output() onJoinEvent = new EventEmitter<string>();

  join() {
    this.onJoinEvent.emit(this.userInput);
  }

}
