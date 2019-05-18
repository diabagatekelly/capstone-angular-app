import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { GetBookTitleService } from '../../../shared/getbooktitle.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-book-results',
  templateUrl: './search-book-results.component.html',
  styleUrls: ['./search-book-results.component.css']
})
export class SearchBookResultsComponent implements OnInit {
  searchabook;
  id;
  authorSearch = '';
  searchDetail = [];
  bookDetail = [];


  constructor(private getbooktitle: GetBookTitleService, private route: ActivatedRoute) {
    // this.bookDetail = this.getbooktitle.viewBooks;
    // this.searchDetail = this.getbooktitle.viewSearch;
    // console.log(this.bookDetail);
    // console.log(this.searchDetail);
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap((params: Params) => this.getbooktitle.onSearchaBook([params['q']])
    ))
    .subscribe(details => this.bookDetail.splice(0, 1, details));

  // this.route.queryParams.subscribe(
  //     params => {
  //         this.searchabook = params.q;
  //         console.log(this.searchabook);
  //         // this.getbooktitle.onSearchaBook(this.searchabook, this.id);
  //       });


    // this.getbooktitle.onSearchaBook().subscribe(res => {
    //       this.bookDetail.push(res);
    //       // this.bookDetail = this.fictionBooks[0].results.books;
    //       console.log(this.bookDetail);
    //     });
  }


  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }
}
