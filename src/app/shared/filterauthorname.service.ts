import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAuthorNameService } from './getauthorname.service';
const parseString = require('xml2js').parseString;

@Injectable()

export class FilterAuthorNameService {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
authorName = '';
authors = [];

onlyAuthors = [];
viewAuthors = [];
filteredAuthors = [];
filter = [];

onlyAuthorsID = [];
viewAuthorsID = [];
filteredAuthorsID = [];
filterID = [];

constructor(private http: HttpClient, private getauthorname: GetAuthorNameService) {}

distinct = (value, index, self) => {
  return self.indexOf(value) === index;
}

    onSearchanAuthor(searchabook, event) {
            this.authorName = searchabook;
            return this.http.get(this.url + this.authorName, {responseType: 'text'}).subscribe((res =>
          parseString(res, (err, result) => {

            if (err) {
                  console.error('There was an error getting authors', err);
                }
            console.log(result);

            this.authors = result.GoodreadsResponse.search[0].results[0].work;

            for (let i = 0; i < this.authors.length - 1; i++) {
              this.onlyAuthorsID.splice(i, 1, this.authors[i].best_book[0].author[0].id[0]._);
              this.onlyAuthorsID.splice(this.authors.length + 1, this.onlyAuthorsID.length);
              this.filterID = this.onlyAuthorsID;

              this.onlyAuthors.splice(i, 1, this.authors[i].best_book[0].author[0].name[0]);
              this.onlyAuthors.splice(this.authors.length + 1, this.onlyAuthors.length);
              this.filter = this.onlyAuthors;
            }
            this.filteredAuthors = this.onlyAuthors.filter(this.distinct);
            this.filteredAuthorsID = this.onlyAuthorsID.filter(this.distinct);


            this.viewAuthorsID.splice(0, 1, this.filteredAuthorsID);

            this.viewAuthors.splice(0, 1, this.filteredAuthors);

            this.getauthorname.onSearchAuthor(this.viewAuthorsID, this.viewAuthors, this.authorName);

                })
                ));
        }

}
