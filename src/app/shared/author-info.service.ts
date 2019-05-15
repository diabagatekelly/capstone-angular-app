import { HttpClient  } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const parseString = require('xml2js').parseString;

@Injectable()

export class AuthorInfoService implements OnInit {
authorID = '';
authorInfo = [];
bookInfo = [];
url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/list/';
token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg';

  constructor(private http: HttpClient) {}

  paginateAuthor(viewBooks, id) {
    console.log(id);
    this.authorID = viewBooks[0][0].best_book[0].author[0].id[0]._;
    return this.http.get(this.url + this.authorID + this.token, {responseType: 'text'}).subscribe((res =>
      parseString(res, (err, result) => {

        if (err) {
              console.error('There was an error getting authors', err);
            }
        console.log(result);

        this.authorInfo = result.GoodreadsResponse.author[0].books[0].book;
        console.log(this.authorInfo);

        for (let i = 0; i < this.authorInfo.length - 1; i++) {
          if ( this.authorInfo[i].id[0]._ === id) {
            this.bookInfo.splice(0, 1, this.authorInfo[i]);
            }
        }

        console.log(this.bookInfo);

  })));
}

  ngOnInit() {
  }

}
