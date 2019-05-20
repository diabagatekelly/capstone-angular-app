import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';


const parseString = require('xml2js').parseString;

@Injectable()

export class GetAuthorNameService implements OnInit {
  url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/author/show/';
  token = '?format=xml&key=oybtOOeDZcd9cbsJTJCTg&per_page=30';
  authors = [];
  viewAuthors;

  authorInfoPage = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearchAuthor(filteredAuthorsID, filteredAuthors, authorName) {
    console.log(authorName);
    function getID() {
      const authorID = [];
      for (let i = 0; i <= filteredAuthors.length - 1; i++) {
        if (filteredAuthors[i].toLowerCase().includes(authorName.toLowerCase())) {
          authorID.push(filteredAuthorsID[i]);
        }
      }
      console.log(authorID);
      return authorID;
    }

    return forkJoin(getID().map(ID => this.http.get(this.url + ID + this.token, { responseType: 'text' }).pipe(map(res => {
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
    return this.http.get(this.url + authorID + this.token, { responseType: 'text' }).pipe(
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
