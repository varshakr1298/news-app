

import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Http} from '@angular/http';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkjoin';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
newsfeed;
feed1;
feed2;
search = 'bbc';
  constructor(private http: Http ) { }

  getfee(search) {

    const now = new Date(). toISOString().substr(0, 10);
    const lastDay = moment().subtract(1 , 'days').format().substr(0, 10);
   const url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=2350bcc275b34486a2a5da0cb1dd3266';
  const url2 = 'https://newsapi.org/v2/everything?q='
  + search + '&from=' + now + '&' + now + '&sortBy=popularity&apiKey=2350bcc275b34486a2a5da0cb1dd3266';
    const abc =  this.http.get(url)
    .map((response: Response) => response.json());

    const bbc = this.http.get(url2)
    .map((response: Response) => response.json());
    console.log(lastDay);
return forkJoin([abc, bbc]);
/*
    .map(data => {
      this.feed1 = data[0];
      this.feed2 = data[1];
       return [].concat(...data);

    });
    */

  }

load() {
  return this.getfee(this.search);
}



getLatest() {
  const now = new Date(). toISOString().substr(0, 10);
  // const lastDay = moment().subtract(1 , 'days').format().substr(0, 10);
 const url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=2350bcc275b34486a2a5da0cb1dd3266';
const url2 = 'https://newsapi.org/v2/everything?q='
+ this.search + '&from=' + now + '&' + now + '&sortBy=popularity&apiKey=2350bcc275b34486a2a5da0cb1dd3266';
  const abc =  this.http.get(url)
  .map((response: Response) => response.json());

  const bbc = this.http.get(url2)
  .map((response: Response) => response.json());
  // console.log(lastDay);
return forkJoin([abc, bbc]);
}

  getfeed2() {
    const url = 'https://newsapi.org/v1/articles?source=abc-news-au&apiKey=2350bcc275b34486a2a5da0cb1dd3266&limit=20';
    return this.http.get(url)
        .map((response: Response) => response.json());

      }

}
