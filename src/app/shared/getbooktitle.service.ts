import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorInfoService } from './author-info.service';
import { map } from 'rxjs/operators';


const parseString = require('xml2js').parseString;

@Injectable()

export class GetBookTitleService {
  url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
  search = [];
  bookIDbyISBN = '';
  authorIDByISBN = '';
  viewSearch = [];

  constructor(private http: HttpClient, private authorinfo: AuthorInfoService) { }

  onSearchaBook(q) {
    return this.http.get(this.url + q, { responseType: 'text' }).pipe(
      map(res => {
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log(result);

          this.search = result.GoodreadsResponse.search[0];

          this.viewSearch.splice(0, 1, this.search);

        });
        return this.search;
      })
    );
  }

  searchByISBN(isbn) {
    return this.http.get(this.url + isbn, { responseType: 'text' }).pipe(
      map(res => {
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log(result);

          this.authorIDByISBN = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].id[0]._;
          console.log(this.authorIDByISBN);

          this.bookIDbyISBN = result.GoodreadsResponse.search[0].results[0].work[0].id[0]._;
          console.log(this.bookIDbyISBN);

        });
        return [this.authorIDByISBN, this.bookIDbyISBN];
      })
    );
  }
}
