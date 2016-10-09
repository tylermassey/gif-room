import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-gif-compose',
  templateUrl: './gif-compose.component.html',
  styleUrls: ['./gif-compose.component.css']
})
export class GifComposeComponent implements OnInit {
  @Input() user: string;
  thread = this.af.database.list('/thread');
  message: '';

  constructor(private af: AngularFire, private http: Http) {

  }

  ngOnInit() {
  }

  submit() {
    this.getGif(this.message).subscribe(gif => {
      console.log(gif);
      this.thread.push({ user: this.user, url: gif });  
    });
    
  }

  getGif(message: string) {
    let query = encodeURIComponent(message);
    let endpoint = `http://api.giphy.com/v1/gifs/translate?s=${query}&api_key=dc6zaTOxFJmzC`;
    return this.http.get(endpoint).map(res => res.json().data.images.downsized.url);
  }

}
