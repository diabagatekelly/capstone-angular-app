import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetBookTitleService } from '../../../shared/getbooktitle.service';
import { AuthorInfoService } from '../../../shared/author-info.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
bookTitle;
bookTitleByISBN;
q;
url;
viewBooks;
id;
  constructor(private route: ActivatedRoute, private getbooktitle: GetBookTitleService, private authorpage: AuthorInfoService) {
               }

  ngOnInit() {
    this.url = this.route.url;
    if (this.url.value[0].path === 'search-book-results') {
      this.route.queryParams.pipe(
        switchMap((params: Params) => this.authorpage.paginateAuthor(+[params['authorID']], +[params['bookID']])
      ))
      .subscribe(details => this.bookTitle = details);
    } else if (this.url.value[0].path === 'home') {
      this.route.queryParams.pipe(
        switchMap((params: Params) => this.getbooktitle.searchByISBN([params['isbn']])
      )).pipe(
        switchMap((res: any) => {
          console.log(res);
          return this.authorpage.paginateAuthor(res[0], res[1]) as any;
        }))
      .subscribe((details) => this.bookTitle = details);
           }
    }
  }


