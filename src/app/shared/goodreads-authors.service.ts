import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  url =
    'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/show/941441?format=xml&key=oybtOOeDZcd9cbsJTJCTg';

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map(res => {
        let authors;
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log('authors', result);
          authors = result.GoodreadsResponse.author[0];
        });

        return authors;
      })
    );
  }
}
