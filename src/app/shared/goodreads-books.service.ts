import { Injectable, OnInit, OnChanges, SimpleChanges, Component, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { SearchBookResultsComponent } from '../homepage/search-book/search-book-results/search-book-results.component';
const parseString = require('xml2js').parseString;


@Injectable({
  providedIn: 'root'
})

export class GoodreadsBooksService implements OnInit {
  rawUrl =
    'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
  finalUrl = [];

  booksearch = '';

  constructor(private http: HttpClient, private route: Router, private activeroute: ActivatedRoute) {
    this.route.events.subscribe((e: any) => {
      console.log('Router event:', e);
    });
  }

  ngOnInit() {
  }

  getBookTitle(searchabook) {
    this.booksearch = searchabook;
    this.finalUrl.splice(0, 1, this.rawUrl + this.booksearch);
  }


  getBooks(url) {
    url = this.finalUrl[0].toString();
    console.log(url);
    console.log(this.finalUrl);
    console.log(this.booksearch);
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(res => {
        let books: any;
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log(url);
          console.log('books', result);
          books = result.GoodreadsResponse.search[0];
        });

        return books;
      })
    );
  }
}
