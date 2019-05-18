import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';


const parseString = require('xml2js').parseString;

@Injectable()

export class GetAuthorNameService implements OnInit {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/show/';
authorName = '';
token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg&per_page=30';
authors = [];
authorID = [];
onlyAuthors = [];
viewAuthors;
newViewAuthors = [];

authorInfoPage = [];
viewAuthorInfoPage = [];

bookInfoPage = [];
bookTitle = '';
viewBookInfoPage = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  }

onSearchAuthor(filteredAuthorsID, filteredAuthors, authorName) {
  console.log(authorName);
  function getID() {
    const authorID = [];
    for (let i = 0; i <= filteredAuthors.length - 1; i ++) {
      if (filteredAuthors[i].toLowerCase().includes(authorName.toLowerCase())) {
     authorID.push(filteredAuthorsID[i]);
       }
    }
    console.log(authorID);
    return authorID;
  }

  return forkJoin(getID().map(ID => this.http.get(this.url + ID + this.token, {responseType: 'text'}).pipe(map(res => {
  parseString(res, (err, result) => {
    if (err) {
    console.error('There was an error getting author', err);
    }
    console.log(result);
    this.authors = result.GoodreadsResponse.author[0];
    console.log(this.authors);
    this.viewAuthors = this.authors;

  });
  console.log(this.viewAuthors);
  return this.viewAuthors;
}
))));
}

getAuthorPage(authorID) {
  return this.http.get(this.url + authorID + this.token, {responseType: 'text'}).pipe(
    map(res => {
      parseString(res, (err, result) => {
        if (err) {
             console.error('There was an error getting authors', err);
                    }
        console.log(result);
        this.authorInfoPage = result.GoodreadsResponse.author[0];
        console.log(this.authorInfoPage);
    });
      return this.authorInfoPage;
}));

}
}








// bookInfo(bookInfo) {
// this.bookTitle = bookInfo;
// console.log(this.bookTitle);
// }

//   authorInfo(authorInfoID) {
//   console.log(authorInfoID);
//   return this.http.get(this.url + authorInfoID + this.token, {responseType: 'text'}).subscribe((res =>
//       parseString(res, (err, result) => {
//        if (err) {
//             console.error('There was an error getting authors', err);
//                    }
//        console.log(result);
//        this.authorInfoPage = result.GoodreadsResponse.author[0];
//        this.viewAuthorInfoPage.splice(0, 1, this.authorInfoPage);

//       //  this.bookInfoPage = result.GoodreadsResponse.author[0].books[0].book;
//       //  console.log(this.bookInfoPage);
//       //  for (let i = 0; i < this.bookInfoPage.length - 1; i++) {
//       //    if ((this.bookInfoPage[i].title.toString().toLowerCase()).includes(this.bookTitle.toString().toLowerCase())) {
//       //     this.viewBookInfoPage.splice(0, 1, this.bookInfoPage[i]);
//       //    }
//       //  }
//       //  console.log(this.viewBookInfoPage);
//   })));
// }
