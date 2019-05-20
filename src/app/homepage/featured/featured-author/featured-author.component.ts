import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../shared/goodreads-authors.service';

@Component({
  selector: 'app-featured-author',
  templateUrl: './featured-author.component.html',
  styleUrls: ['./featured-author.component.css']
})
export class FeaturedAuthorComponent implements OnInit {
  authors = [];
  booklist: any[] = [];

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(res => {
      this.authors.push(res);
      console.log(this.authors);
    });

  }
}
