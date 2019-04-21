import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;

@Injectable({
  providedIn: 'root'
})

export class GoodreadsBooksService {

  rawUrl =
  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';

  constructor(private http: HttpClient) { }


  getBooks(bookTitle) {
    const url = this.rawUrl + bookTitle;
    console.log(url);
    console.log(bookTitle);
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(res => {
        let books;
        let search;
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log('books', result);
          books = result.GoodreadsResponse.search[0].results[0].work;
          search = result.GoodreadsResponse.search[0];
                });

        return [books, search];
      })
    );
  }

}
