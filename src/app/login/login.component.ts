import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;

  @Output() onJoin = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  join() {
    this.onJoin.emit(this.user);
  }

}
