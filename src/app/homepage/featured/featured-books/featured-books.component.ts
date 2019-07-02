import {
  Component,
  OnInit,
  HostListener,
} from '@angular/core';
import { NYTBooksService } from '../../../shared/nyt-featured-books.service';
import { ActivatedRoute } from '@angular/router';
import { FilterAuthorNameService } from '../../../shared/filterauthorname.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit {
  fictionBooks = [];
  fictionBooks1 = [];
  fictionBooks2 = [];
  fictionBooks3 = [];
  fictionBooks4 = [];
  fictionBooksFinal = [];

  nonfictionBooks = [];
  nonfictionPics = [];
  nonfictionBooks1 = [];
  nonfictionBooks2 = [];
  nonfictionBooks3 = [];
  nonfictionBooks4 = [];
  nonfictionBooksFinal = [];

  childrenBooks = [];
  childrenBooks1 = [];
  childrenBooks2 = [];
  childrenBooks3 = [];
  childrenBooks4 = [];
  childrenBooksFinal = [];

  youngAdultBooks = [];
  youngAdultBooks1 = [];
  youngAdultBooks2 = [];
  youngAdultBooks3 = [];
  youngAdultBooks4 = [];
  youngAdultBooksFinal = [];

  featuredBook = '';

  public innerWidth: any;

  constructor(
    private nytBookService: NYTBooksService,
    private route: ActivatedRoute,
    private filterauthorname: FilterAuthorNameService
  ) {}

  ngOnInit() {
    this.nytBookService.getFictionBooks().subscribe(res => {
      this.fictionBooks.push(res);
      this.fictionBooks = this.fictionBooks[0].results.books;

      for (let i = 0; i <= this.fictionBooks.length - 1; i++) {
        const slice = this.fictionBooks.slice(i, i + 1);
        this.fictionBooks1.push(slice);
      }
      for (let j = 0; j <= this.fictionBooks.length - 1; j++) {
        const slice = this.fictionBooks.slice(j, j + 2);
        this.fictionBooks2.push(slice);
        j++;
      }
      for (let j = 0; j <= this.fictionBooks.length - 1; j++) {
        const slice = this.fictionBooks.slice(j, j + 3);
        this.fictionBooks3.push(slice);
        j = j + 2;
      }
      for (let j = 0; j <= this.fictionBooks.length - 1; j++) {
        const slice = this.fictionBooks.slice(j, j + 4);
        this.fictionBooks4.push(slice);
        j = j + 3;
      }
    });

    this.nytBookService.getNonfictionBooks().subscribe(result => {
      this.nonfictionBooks.push(result);
      this.nonfictionBooks = this.nonfictionBooks[0].results.books;

      for (let i = 0; i <= this.nonfictionBooks.length - 1; i++) {
        const slice = this.nonfictionBooks.slice(i, i + 1);
        this.nonfictionBooks1.push(slice);
      }
      for (let j = 0; j <= this.nonfictionBooks.length - 1; j++) {
        const slice = this.nonfictionBooks.slice(j, j + 2);
        this.nonfictionBooks2.push(slice);
        j++;
      }
      for (let j = 0; j <= this.nonfictionBooks.length - 1; j++) {
        const slice = this.nonfictionBooks.slice(j, j + 3);
        this.nonfictionBooks3.push(slice);
        j = j + 2;
      }
      for (let j = 0; j <= this.nonfictionBooks.length - 1; j++) {
        const slice = this.nonfictionBooks.slice(j, j + 4);
        this.nonfictionBooks4.push(slice);
        j = j + 3;
      }
    });

    this.nytBookService.getPictureBooks().subscribe(result => {
      this.childrenBooks.push(result);
      this.childrenBooks = this.childrenBooks[0].results.books;
      for (let i = 0; i <= this.childrenBooks.length - 1; i++) {
        const slice = this.childrenBooks.slice(i, i + 1);
        this.childrenBooks1.push(slice);
      }
      for (let j = 0; j <= this.childrenBooks.length - 1; j++) {
        const slice = this.childrenBooks.slice(j, j + 2);
        this.childrenBooks2.push(slice);
        j++;
      }
      for (let j = 0; j <= this.childrenBooks.length - 1; j++) {
        const slice = this.childrenBooks.slice(j, j + 3);
        this.childrenBooks3.push(slice);
        j = j + 2;
      }
      for (let j = 0; j <= this.childrenBooks.length - 1; j++) {
        const slice = this.childrenBooks.slice(j, j + 4);
        this.childrenBooks4.push(slice);
        j = j + 3;
      }
    });

    this.nytBookService.getYoungAdultBooks().subscribe(result => {
      this.youngAdultBooks.push(result);
      this.youngAdultBooks = this.youngAdultBooks[0].results.books;

      for (let i = 0; i <= this.youngAdultBooks.length - 1; i++) {
        const slice = this.youngAdultBooks.slice(i, i + 1);
        this.youngAdultBooks1.push(slice);
      }
      for (let j = 0; j <= this.youngAdultBooks.length - 1; j++) {
        const slice = this.youngAdultBooks.slice(j, j + 2);
        this.youngAdultBooks2.push(slice);
        j++;
      }
      for (let j = 0; j <= this.youngAdultBooks.length - 1; j++) {
        const slice = this.youngAdultBooks.slice(j, j + 3);
        this.youngAdultBooks3.push(slice);
        j = j + 2;
      }
      for (let j = 0; j <= this.youngAdultBooks.length - 1; j++) {
        const slice = this.youngAdultBooks.slice(j, j + 4);
        this.youngAdultBooks4.push(slice);
        j = j + 3;
      }
    });

    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
      this.fictionBooksFinal = this.fictionBooks1;
      this.nonfictionBooksFinal = this.nonfictionBooks1;
      this.childrenBooksFinal = this.childrenBooks1;
      this.youngAdultBooksFinal = this.youngAdultBooks1;
    } else if (this.innerWidth >= 600 && this.innerWidth < 900) {
      this.fictionBooksFinal = this.fictionBooks2;
      this.nonfictionBooksFinal = this.nonfictionBooks2;
      this.childrenBooksFinal = this.childrenBooks2;
      this.youngAdultBooksFinal = this.youngAdultBooks2;
    } else if (this.innerWidth >= 900 && this.innerWidth < 1100) {
      this.fictionBooksFinal = this.fictionBooks3;
      this.nonfictionBooksFinal = this.nonfictionBooks3;
      this.childrenBooksFinal = this.childrenBooks3;
      this.youngAdultBooksFinal = this.youngAdultBooks3;
    } else if (this.innerWidth >= 1100) {
      this.fictionBooksFinal = this.fictionBooks4;
      this.nonfictionBooksFinal = this.nonfictionBooks4;
      this.childrenBooksFinal = this.childrenBooks4;
      this.youngAdultBooksFinal = this.youngAdultBooks4;
    }

    AOS.init({
      duration: 2000,
      easing: 'ease-out'
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
      this.fictionBooksFinal = this.fictionBooks1;
      this.nonfictionBooksFinal = this.nonfictionBooks1;
      this.childrenBooksFinal = this.childrenBooks1;
      this.youngAdultBooksFinal = this.youngAdultBooks1;
    } else if (this.innerWidth >= 600 && this.innerWidth < 900) {
      this.fictionBooksFinal = this.fictionBooks2;
      this.nonfictionBooksFinal = this.nonfictionBooks2;
      this.childrenBooksFinal = this.childrenBooks2;
      this.youngAdultBooksFinal = this.youngAdultBooks2;
    } else if (this.innerWidth >= 900 && this.innerWidth < 1100) {
      this.fictionBooksFinal = this.fictionBooks3;
      this.nonfictionBooksFinal = this.nonfictionBooks3;
      this.childrenBooksFinal = this.childrenBooks3;
      this.youngAdultBooksFinal = this.youngAdultBooks3;
    } else if (this.innerWidth >= 1100) {
      this.fictionBooksFinal = this.fictionBooks4;
      this.nonfictionBooksFinal = this.nonfictionBooks4;
      this.childrenBooksFinal = this.childrenBooks4;
      this.youngAdultBooksFinal = this.youngAdultBooks4;
    }
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
