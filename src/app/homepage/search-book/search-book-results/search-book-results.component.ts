import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetBookTitleService } from '../../../shared/getbooktitle.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  authorSearch = '';
  bookDetail = [];

  constructor(private getbooktitle: GetBookTitleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap((params: Params) => this.getbooktitle.onSearchaBook([params['q']])
      ))
      .subscribe(details => this.bookDetail.splice(0, 1, details));
  }

  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }
}
