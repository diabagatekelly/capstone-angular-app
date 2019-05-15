import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const parseString = require('xml2js').parseString;

@Injectable()

export class GetAuthorNameService implements OnInit {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/show/';
authorName = '';
token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg&per_page=30';
authors = [];
onlyAuthors = [];
viewAuthors = [];
newViewAuthors = [];

authorInfoPage = [];
viewAuthorInfoPage = [];

bookInfoPage = [];
bookTitle = '';
viewBookInfoPage = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  }

onSearchAuthor(viewAuthorsID, viewAuthors, authorName) {
  this.authorName = authorName;
  for (let i = 0; i <= viewAuthors[0].length - 1; i++) {
  if (viewAuthors[0][i].toLowerCase().includes(authorName.toLowerCase())) {
    this.http.get(this.url + viewAuthorsID[0][i] + this.token, {responseType: 'text'}).subscribe((res =>
      parseString(res, (err, result) => {
       if (err) {
            console.error('There was an error getting authors', err);
                   }
       console.log(result);
       this.authors = result.GoodreadsResponse.author[0];
       console.log(this.authorName);

       if (this.viewAuthors === undefined || this.viewAuthors.length === 0) {
        this.viewAuthors.push(this.authors);
    } else if (this.viewAuthors[0].name.toString().toLowerCase().includes(this.authorName)) {
          this.viewAuthors.push(this.authors);
         } else if (!(this.viewAuthors[0].name.toString().toLowerCase().includes(this.authorName))) {
           this.viewAuthors.splice(0, 10, this.authors);
         }
  })));
 }
 }
  console.log(this.viewAuthors);
}

// bookInfo(bookInfo) {
// this.bookTitle = bookInfo;
// console.log(this.bookTitle);
// }

authorInfo(authorInfoID) {
  console.log(authorInfoID);
  return this.http.get(this.url + authorInfoID + this.token, {responseType: 'text'}).subscribe((res =>
      parseString(res, (err, result) => {
       if (err) {
            console.error('There was an error getting authors', err);
                   }
       console.log(result);
       this.authorInfoPage = result.GoodreadsResponse.author[0];
       this.viewAuthorInfoPage.splice(0, 1, this.authorInfoPage);

      //  this.bookInfoPage = result.GoodreadsResponse.author[0].books[0].book;
      //  console.log(this.bookInfoPage);
      //  for (let i = 0; i < this.bookInfoPage.length - 1; i++) {
      //    if ((this.bookInfoPage[i].title.toString().toLowerCase()).includes(this.bookTitle.toString().toLowerCase())) {
      //     this.viewBookInfoPage.splice(0, 1, this.bookInfoPage[i]);
      //    }
      //  }
      //  console.log(this.viewBookInfoPage);
  })));
}
}
