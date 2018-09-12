import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newsselection',
  templateUrl: './newsselection.component.html',
  styleUrls: ['./newsselection.component.scss']
})
export class NewsselectionComponent implements OnInit {
newsfeed;
search;
  constructor(private svc: NewsService) { }

  loadSearch() {
console.log(this.search);
// this.newsfeed = '';
    // this.newsfeed = this.svc.load();
  }

  ngOnInit() {
  }

}
