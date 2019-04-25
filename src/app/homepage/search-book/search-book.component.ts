import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Params } from '@angular/router';
import { GoodreadsBooksService } from 'src/app/shared/goodreads-books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
})

export class SearchBookComponent implements OnInit {
    searchabook = '';

  constructor(private goodreads: GoodreadsBooksService, private router: Router) { }

    onSearchBook() {
      this.goodreads.getBookTitle(this.searchabook);
      console.log(this.searchabook);
    }

    onLoad() {
      this.router.navigate(['search-book-results'],
       {queryParams: {q: this.searchabook}});
    }

    ngOnInit() {
  }

  //  onSearchBook(event: any) {
  //   return this.http.get(this.url + this.bookTitle, {responseType: 'text'}).subscribe((res =>
  //   parseString(res, (err, result) => {
  //     if (err) {
  //           console.error('There was an error getting authors', err);
  //         }
  //     this.books = result.GoodreadsResponse.search[0].results[0].work;
  //     this.search = result.GoodreadsResponse.search[0];
  //     console.log(this.books);
  //     console.log(this.search);

  //     this.viewBooks.splice(0, 1, this.books);
  //     this.viewSearch.splice(0, 1, this.search);

  //     return [this.viewBooks, this.viewSearch] = event.target.value;
  //         })
  //         ));
  // }

}
