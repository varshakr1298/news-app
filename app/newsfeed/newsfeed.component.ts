
import { NewsService } from '../news.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
title;
newsfeed;
images;
search;
drop = false;
li;
timeup = false;
searchTitle = 'EUROPE';
customSearch = false;
europe; uae; asia; africa;  premierleauge; music; movies; currency; fashion;
provider;
newscollection = [];
  constructor(private svc: NewsService ) { }
collection() {




}
 // setTimeout( );

// load by search
  loadSearch() {
   this.searchTitle = this.search.toUpperCase();
this.europe = this.svc.getfee(this.search)
.subscribe(data => {
  const feed1 = data[0].articles;
  const feed2 = data[1].articles;

  this.europe = feed2;
  this.customSearch = true;
  console.log(this.newsfeed);
});
  }

latesNews() {
// this.svc.getLatest();
}

  // show drop down
  showDropdown() {
  this.drop = true;
  }


closeDropdown() {
     this.search = this.li;
    this.drop = false;
  }

  ngOnInit() {
  this.title = 'Results';
  // get feed

  const searcheurope = 'europe';
  const searchuae = 'uae';
  const searchafrica = 'africa';
  const searchasia = 'asia';
  const searchmovies = 'movies';
  const searchmusic = 'music';
  const searchpremierleauge = 'premier league';
  const searchcurrency = 'currency';
  const searchfashion = 'fashion and design';


  this.europe = this.svc.getfee(searcheurope)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.europe = feed2;

      console.log(this.europe);
  });



  this.uae = this.svc.getfee(searchuae)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.uae = feed2;

      console.log(this.uae);
  });


  this.asia = this.svc.getfee(searchasia)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.asia = feed2;

      console.log(this.asia);
  });


  this.africa = this.svc.getfee(searchafrica)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.africa = feed2;

      console.log(this.africa);
  });


  this.premierleauge = this.svc.getfee(searchpremierleauge)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.premierleauge = feed2;

      console.log(this.premierleauge);
  });

  this.movies = this.svc.getfee(searchmovies)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.movies = feed2;

      console.log(this.movies);
  });



  this.music = this.svc.getfee(searchmusic)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.music = feed2;

      console.log(this.movies);
  });

  this.currency = this.svc.getfee(searchcurrency)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.currency = feed2;

      console.log(this.currency
      );
  });


  this.fashion = this.svc.getfee(searchfashion)
  .subscribe(data => {
    const feed1 = data[0].articles;
    const feed2 = data[1].articles;

    this.fashion = feed2;

      console.log(this.fashion
      );
  });



  this.collection();

  }

}
