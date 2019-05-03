import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

const parseString = require('xml2js').parseString;

@Injectable()

export class GetAuthorNameService implements OnInit {
url =  'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/show/';
authorName = '';
token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg';
authors = [];
onlyAuthors = [];
viewAuthors = [];
newViewAuthors = [];
// filteredAuthors;


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



      //  for (let j = 0; j < this.authors.length - 1; j++) {
      //   this.onlyAuthors.splice(j, 1, this.authors);
      //   this.onlyAuthors.splice(this.authors.length + 1, this.onlyAuthors.length);
      //      }
      //  this.viewAuthors.splice(0, 1, this.onlyAuthors);
      //  this.newViewAuthors = this.viewAuthors;
      //  return this.newViewAuthors;
  })));
 }
 }
  console.log(this.viewAuthors);
}
}
