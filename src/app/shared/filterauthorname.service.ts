import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAuthorNameService } from './getauthorname.service';
import { AuthorInfoService } from './author-info.service';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;

@Injectable()

export class FilterAuthorNameService {
// tslint:disable-next-line:max-line-length
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&per_page=30&page=1&q=';
authorName = '';
trimmedName = '';
authors = [];

onlyAuthors = [];
viewAuthors;
filteredAuthors = [];
filter = [];

onlyAuthorsID = [];
viewAuthorsID = [];
filteredAuthorsID = [];
filterID = [];

authorInfo = '';
authorInfoID = [];

onlyAuthorInfoID = [];
viewAuthorInfoID = [];
filteredAuthorInfoID = [];
filterInfoID = [];

bookInfo = '';

constructor(private http: HttpClient, private getauthorname: GetAuthorNameService, private authorinfo: AuthorInfoService) {}

distinct = (value, index, self) => {
  return self.indexOf(value) === index;
}

    onSearchanAuthor(q) {
      this.authorName = q;
      this.trimmedName = q[0].trim();
      const index = q[0].lastIndexOf(' ');
      this.trimmedName = q[0].substring(index + 1);

      return this.http.get(this.url + this.trimmedName, {responseType: 'text'}).pipe(
              map(res => {
                parseString(res, (err, result) => {

            if (err) {
                  console.error('There was an error getting authors', err);
                }
            console.log(result);

            this.authors = result.GoodreadsResponse.search[0].results[0].work;


            for (let i = 0; i <= this.authors.length - 1; i++) {
                this.onlyAuthorsID.splice(i, 1, this.authors[i].best_book[0].author[0].id[0]._);
                this.onlyAuthorsID.splice(this.authors.length + 1, this.onlyAuthorsID.length);
                this.filterID = this.onlyAuthorsID;

                this.onlyAuthors.splice(i, 1, this.authors[i].best_book[0].author[0].name[0]);
                this.onlyAuthors.splice(this.authors.length + 1, this.onlyAuthors.length);
                this.filter = this.onlyAuthors;
            }
            this.filteredAuthors = this.onlyAuthors.filter(this.distinct);
            this.filteredAuthorsID = this.onlyAuthorsID.filter(this.distinct);

          });
                return [this.filteredAuthorsID, this.filteredAuthors, this.trimmedName] as any;

                }));
        }

    //     toBookInfo(title) {
    //       this.bookInfo = title.toLowerCase();
    //       this.getauthorname.bookInfo(this.bookInfo);
    //     }

        toAuthorInfo(name) {
    this.authorInfo = name;
    return this.http.get(this.url + this.authorInfo, {responseType: 'text'}).subscribe((res =>
      parseString(res, (err, result) => {

        if (err) {
              console.error('There was an error getting authors', err);
            }
        console.log(result);

        this.authorInfoID = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].id[0]._;

      //   for (let i = 0; i < this.authorInfoID.length - 1; i++) {
      //     if (this.authorInfoID[i].best_book[0].author[0].name.toString().toLowerCase().includes(this.authorInfo)) {
      //       console.log(this.authorInfoID[i].best_book[0].author[0].name);
      //       this.onlyAuthorInfoID.splice(i, 1, this.authorInfoID[i].best_book[0].author[0].id[0]._);
      //       this.onlyAuthorInfoID.splice(this.authorInfoID.length + 1, this.onlyAuthorInfoID.length);
      //       this.filterInfoID = this.onlyAuthorInfoID;
      //     }
      // }
      //   this.filteredAuthorInfoID = this.onlyAuthorInfoID.filter(this.distinct);


      //   this.viewAuthorInfoID.splice(0, 1, this.filteredAuthorInfoID);

        // this.getauthorname.authorInfo(this.authorInfoID);

        }
      )));
}
}
