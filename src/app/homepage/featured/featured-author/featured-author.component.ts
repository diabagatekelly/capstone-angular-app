import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../shared/authors.service';
import { IAuthors } from '../../../shared/authors.interface';

@Component({
  selector: 'app-featured-author',
  templateUrl: './featured-author.component.html',
  styleUrls: ['./featured-author.component.css']
})
export class FeaturedAuthorComponent implements OnInit {
  authors: IAuthors[] = [];
  booklist: any[] = [];

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
  this.authorService.getAuthors().subscribe(res => {
    this.authors.push(res);
    // this.parseString(res, (result, err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   this.authors.push(err.GoodreadsResponse.author[0]);

    //   for (length = 0; length <= 10; length++) {
    //     this.booklist.push(err.GoodreadsResponse.author[0].books[0].book[length]);
    //   }
    // });
  });
  }
}
