import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const parseString = require('xml2js').parseString;




@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})

export class SearchBookComponent implements OnInit {
  @Output() sendBookTitle = new EventEmitter();
  viewBooks = [];
  books: any = '';
  viewSearch = [];
  search: any = [];
  url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=oybtOOeDZcd9cbsJTJCTg&q=';
    bookTitle = '';

    onSendBookTitle() {
      this.sendBookTitle.emit(this.bookTitle);
    }

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


  // searchTitle() {
  //   let bookSearch;
  //   this.http.get(this.url + this.bookTitle)
  //   .subscribe(
  //     (res) => {
  //       bookSearch = res;
  //       console.log(bookSearch);
  //     });
  // }


ngOnInit() {
      // this.goodreadsbooks.getBooks(this.bookTitle)
      // .subscribe(result => {
      //     this.searchResult = result;
      //     this.searchDetail = result;
      //     console.log(this.searchResult);
      //     console.log(this.searchDetail);
      //   });
  }

}
