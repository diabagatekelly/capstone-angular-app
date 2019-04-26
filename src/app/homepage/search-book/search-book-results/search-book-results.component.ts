import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GetBookTitleService } from '../../../shared/getbooktitle.service';

@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  searchabook;
  authorSearch = '';
  searchDetail = [];
  bookDetail = [];


  constructor(private getbooktitle: GetBookTitleService, private route: ActivatedRoute) {
    this.bookDetail = this.getbooktitle.viewBooks;
    this.searchDetail = this.getbooktitle.viewSearch;
    console.log(this.bookDetail);
    console.log(this.searchDetail);
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
