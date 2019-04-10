import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/books.service';
import { IBooks } from '../../../shared/books.interface';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit {

  parseString = require('xml2js').parseString;
  books: IBooks[] = [];


  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(res => {
      this.parseString(res, (result, err) => {
        if (err) {
          console.log(err);
        }
        this.books.push(err.GoodreadsResponse.book[0]);
      });
    });
  }

}
