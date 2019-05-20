import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;

@Injectable()
export class FilterAuthorNameService {
  url =
    // tslint:disable-next-line:max-line-length
    'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&per_page=30&page=1&q=';
  trimmedName = '';
  authors = [];

  onlyAuthors = [];
  filteredAuthors = [];
  filter = [];

  onlyAuthorsID = [];
  filteredAuthorsID = [];
  filterID = [];

  authorInfo = '';
  authorInfoID = [];

  constructor(
    private http: HttpClient,
  ) {}

  distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  onSearchanAuthor(q) {
    this.trimmedName = q[0].trim();
    const index = q[0].lastIndexOf(' ');
    this.trimmedName = q[0].substring(index + 1);

    return this.http
      .get(this.url + this.trimmedName, { responseType: 'text' })
      .pipe(
        map(res => {
          parseString(res, (err, result) => {
            if (err) {
              console.error('There was an error getting authors', err);
            }
            console.log(result);

            this.authors = result.GoodreadsResponse.search[0].results[0].work;

            for (let i = 0; i <= this.authors.length - 1; i++) {
              this.onlyAuthorsID.splice(
                i,
                1,
                this.authors[i].best_book[0].author[0].id[0]._
              );
              this.onlyAuthorsID.splice(
                this.authors.length + 1,
                this.onlyAuthorsID.length
              );
              this.filterID = this.onlyAuthorsID;

              this.onlyAuthors.splice(
                i,
                1,
                this.authors[i].best_book[0].author[0].name[0]
              );
              this.onlyAuthors.splice(
                this.authors.length + 1,
                this.onlyAuthors.length
              );
              this.filter = this.onlyAuthors;
            }
            this.filteredAuthors = this.onlyAuthors.filter(this.distinct);
            this.filteredAuthorsID = this.onlyAuthorsID.filter(this.distinct);
          });
          return [
            this.filteredAuthorsID,
            this.filteredAuthors,
            this.trimmedName
          ] as any;
        })
      );
  }

  toAuthorInfo(name) {
    this.authorInfo = name;
    return this.http
      .get(this.url + this.authorInfo, { responseType: 'text' })
      .subscribe(res =>
        parseString(res, (err, result) => {
          if (err) {
            console.error('There was an error getting authors', err);
          }
          console.log(result);

          this.authorInfoID =
            result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].id[0]._;
        })
      );
  }
}
