import { Component } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_angular';
  countMe = 1;
  clickMe() {
    this.countMe++;
    if (this.countMe >= 3) {
      this.isCheck = true;
    }
    console.log(this.countMe)
  }
  isCheck = false;
  items = [
    "count 1", "count 2", "count 3"
  ]

  posts:any[] = [];

  callAPI() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
      axios.get(url).then((res) => {
        console.log('axios res -->', res.data)
        this.posts = res.data;
      })
  }

  ngOnInit() {
    this.callAPI();
  }

}
