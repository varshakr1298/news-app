import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {NewsfeedComponent }  from './newsfeed/newsfeed.component';
import {NewsService} from './news.service';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NewsselectionComponent } from './newsselection/newsselection.component';





@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    HeaderComponent,
    NewsselectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
