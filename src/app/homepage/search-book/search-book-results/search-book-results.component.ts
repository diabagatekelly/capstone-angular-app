import { Component, OnInit } from '@angular/core';
import { GoodreadsBooksService } from 'src/app/shared/goodreads-books.service';

@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  searchabook = '';
  authorSearch = '';
  searchDetail = '';
  bookDetail = [];


  constructor(private goodreadsbooks: GoodreadsBooksService) {
    this.goodreadsbooks.sendUrl.subscribe(searchabook => this.searchabook = searchabook);
    this.goodreadsbooks.getBooks()
    .subscribe(result => {
        this.searchDetail = result;
        console.log(this.searchDetail);
        this.bookDetail.push(result.results[0].work);
      });
  }

  ngOnInit() {
  }

  onSearchBook() {
    this.goodreadsbooks.getBookTitle(this.searchabook);
    console.log(this.searchabook);
    this.goodreadsbooks.sendUrl.emit(this.searchabook);
  }

  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }

}
