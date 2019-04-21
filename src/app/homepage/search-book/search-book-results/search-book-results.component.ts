import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GoodreadsBooksService } from '../../../shared/goodreads-books.service';
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

const parseString = require('xml2js').parseString;


@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  authorSearch = '';
  viewBooks = [];
  books: any = '';
  viewSearch = [];
  search: any = [];
  url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
  bookTitle = '';

  constructor(private http: HttpClient) {}

  onSearchBook(event: any) {
    return this.http.get(this.url + this.bookTitle, {responseType: 'text'}).subscribe((res =>
    parseString(res, (err, result) => {
      if (err) {
            console.error('There was an error getting authors', err);
          }
      this.books = result.GoodreadsResponse.search[0].results[0].work;
      this.search = result.GoodreadsResponse.search[0];
      console.log(this.books);
      console.log(this.search);

      this.viewBooks.splice(0, 1, this.books);
      this.viewSearch.splice(0, 1, this.search);

      return [this.viewBooks, this.viewSearch] = event.target.value;
          })
          ));
  }

  ngOnInit() {
  }


  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }

}
