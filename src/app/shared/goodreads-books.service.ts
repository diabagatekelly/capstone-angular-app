import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;

@Injectable({
  providedIn: 'root'
})

export class GoodreadsBooksService implements OnInit {
  @Output()  sendUrl = new EventEmitter();

  booksearch = '';

  rawUrl =
  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';

   url;

  constructor(private http: HttpClient) {}

   ngOnInit() {
   }

   getBookTitle(searchabook) {
    this.booksearch = searchabook;
    this.url = (this.rawUrl) + (this.booksearch);
    console.log(this.url);
}

  getBooks() {
    this.url = this.url;
    console.log(this.url);
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map(res => {
        let books;
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log('books', result);
          books = result.GoodreadsResponse.search[0];
                });

        return books;
      })
    );
  }

}
