import { Component, OnInit } from '@angular/core';
import { NYTBooksService } from '../../../shared/nyt-featured-books.service';
import { IBooks } from '../../../shared/books.interface';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit {

  // parseString = require('xml2js').parseString;
  books = [];
  authors;
  i: number = Math.floor(Math.random() * 15);

  constructor(private nytBookService: NYTBooksService) {}

    ngOnInit() {
    this.nytBookService.getBooks().subscribe(res => {
      this.books.push(res);
      console.log(this.books);
      this.authors = this.books[0].results.books[this.i].author;
  });


  // ngOnInit() {
  //   this.bookService.getBooks().subscribe(res => {
  //     this.parseString(res, (result, err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       this.books.push(err.GoodreadsResponse.book[0]);
  //     });
  //   });
  // }
  }
}
