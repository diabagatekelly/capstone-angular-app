import { Component, OnInit } from '@angular/core';
import { NYTBooksService } from '../../../shared/nyt-featured-books.service';
import { ActivatedRoute } from '@angular/router';
import { FilterAuthorNameService } from '../../../shared/filterauthorname.service';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit {

  fictionBooks = [];
  nonfictionBooks = [];
  childrenBooks = [];
  youngAdultBooks = [];

  featuredBook = '';

  name;
  title;

  authors;
  i: number = Math.floor(Math.random() * 15);

  constructor(private nytBookService: NYTBooksService, private route: ActivatedRoute, private filterauthorname: FilterAuthorNameService) {}

    ngOnInit() {
    this.nytBookService.getFictionBooks().subscribe(res => {
      this.fictionBooks.push(res);
      this.fictionBooks = this.fictionBooks[0].results.books;
      console.log(this.fictionBooks);
    });

    this.nytBookService.getNonfictionBooks().subscribe(result => {
        this.nonfictionBooks.push(result);
        this.nonfictionBooks = this.nonfictionBooks[0].results.books;
        console.log(this.nonfictionBooks);
  });

    this.nytBookService.getPictureBooks().subscribe(result => {
    this.childrenBooks.push(result);
    this.childrenBooks = this.childrenBooks[0].results.books;
    console.log(this.childrenBooks);
});

    this.nytBookService.getYoungAdultBooks().subscribe(result => {
  this.youngAdultBooks.push(result);
  this.youngAdultBooks = this.youngAdultBooks[0].results.books;
  console.log(this.youngAdultBooks);
});
  }

    onFiction() {
    this.featuredBook = 'fiction';
      }

    onNonfiction() {
    this.featuredBook = 'nonfiction';
      }

    onChildren() {
    this.featuredBook = 'children';
      }

    onYoungAdults() {
    this.featuredBook = 'youngadult';
      }
}
