import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorInfoService } from './author-info.service';

const parseString = require('xml2js').parseString;

@Injectable()

export class GetBookTitleService {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
bookTitle = '';
id;
books = '';
search = '';
viewBooks = [];
viewSearch = [];
newViewBooks = [];
newViewSearch = [];

constructor(private http: HttpClient, private authorinfo: AuthorInfoService) {}

    onSearchaBook(searchabook, id) {
            this.bookTitle = searchabook;
            return this.http.get(this.url + this.bookTitle, {responseType: 'text'}).subscribe((res =>
          parseString(res, (err, result) => {

            if (err) {
                  console.error('There was an error getting authors', err);
                }
            console.log(result);

            this.books = result.GoodreadsResponse.search[0].results[0].work;
            this.search = result.GoodreadsResponse.search[0];

            if (id !== undefined) {
              this.id = id;
            } else if ( id === undefined) {
              this.id = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].id[0]._;
            }

            console.log(this.books);
            console.log(this.id);

            this.viewBooks.splice(0, 1, this.books);
            this.newViewBooks = this.viewBooks;
            console.log(this.viewBooks);

            this.viewSearch.splice(0, 1, this.search);
            this.newViewSearch = this.viewSearch;

            this.authorinfo.paginateAuthor(this.viewBooks, this.id);

            return [this.newViewBooks, this.newViewSearch];
                })
                ));
        }
}
