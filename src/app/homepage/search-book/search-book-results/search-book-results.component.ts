import { Component, OnInit } from '@angular/core';
import { GoodreadsBooksService } from '../../../shared/goodreads-books.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  searchabook;
  authorSearch = '';
  searchDetail = '';
  bookDetail = [];


  constructor(private goodreadsbooks: GoodreadsBooksService, private route: ActivatedRoute) {}

  ngOnInit() {
this.goodreadsbooks.getBooks(this.searchabook)
    .subscribe(result => {
        this.searchDetail = result;
        console.log(this.searchDetail);
        this.bookDetail.push(result.results[0].work);
      });
  }

  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }

}
