import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBookTitleService } from '../../../shared/getbooktitle.service';
import { AuthorInfoService } from '../../../shared/author-info.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
searchabook;
id;
title;
bookTitle = [];
  constructor(private route: ActivatedRoute, private getbooktitle: GetBookTitleService, private authorpage: AuthorInfoService) {
                this.bookTitle = this.authorpage.bookInfo;
               }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
          this.searchabook = params.title;
          this.id = params.id;
          console.log(this.id);
          console.log(this.searchabook);
          this.getbooktitle.onSearchaBook(this.searchabook.toLowerCase(), this.id);
        });
  }
  }

