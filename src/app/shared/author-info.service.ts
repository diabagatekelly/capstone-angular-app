import { HttpClient  } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

const parseString = require('xml2js').parseString;

@Injectable()

export class AuthorInfoService implements OnInit {
books = [];
authorID = '';
authorInfo = [];
bookInfo = [];
url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/list/';

token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg';

  constructor(private http: HttpClient) {}


  paginateAuthor(authorID, bookID) {
    return this.http.get(this.url + authorID + this.token, {responseType: 'text'}).pipe(
      map(res => {
      parseString(res, (err, result) => {

        if (err) {
              console.error('There was an error getting authors', err);
            }
        console.log(result);

        this.authorInfo = result.GoodreadsResponse.author[0].books[0].book;
        console.log(this.authorInfo);
        this.authorInfo.forEach(book => {
          if ( book.work[0].id == bookID || book.id[0]._ == bookID) {
            console.log(book.work[0].id);
            this.bookInfo = book;
            }
        });
        console.log(this.bookInfo);
});
      return this.bookInfo;

}));
}
  ngOnInit() {
  }

}

