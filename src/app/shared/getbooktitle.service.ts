import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const parseString = require('xml2js').parseString;

@Injectable()

export class GetBookTitleService {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
bookTitle = '';
books = '';
search = '';
viewBooks = [];
viewSearch = [];
newViewBooks = [];
newViewSearch = [];

constructor(private http: HttpClient) {}

    onSearchaBook(searchabook, event: any) {
            this.bookTitle = searchabook;
            console.log(this.bookTitle);
            return this.http.get(this.url + this.bookTitle, {responseType: 'text'}).subscribe((res =>
          parseString(res, (err, result) => {

            if (err) {
                  console.error('There was an error getting authors', err);
                }
            console.log(result);

            this.books = result.GoodreadsResponse.search[0].results[0].work;
            this.search = result.GoodreadsResponse.search[0];

            this.viewBooks.splice(0, 1, this.books);
            this.newViewBooks = this.viewBooks;

            this.viewSearch.splice(0, 1, this.search);
            this.newViewSearch = this.viewSearch;

            return [this.newViewBooks, this.newViewSearch] = event.target.value;
                })
                ));
        }

}
