import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; 

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread: any[];
  threadSub: any;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.watchThread();
  }

  watchThread() {
    this.threadSub = this.af.database.list('/thread').subscribe(thread => {
      this.thread = thread;
    });
  }

}
