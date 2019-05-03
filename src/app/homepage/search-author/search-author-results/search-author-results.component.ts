import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FilterAuthorNameService } from '../../../shared/filterauthorname.service';
import { GetAuthorNameService } from '../../../shared/getauthorname.service';


@Component({
  selector: 'app-search-author-results',
  templateUrl: './search-author-results.component.html',
  styleUrls: ['./search-author-results.component.css']
})

export class SearchAuthorResultsComponent implements OnInit {
  searchauthor;
  authorSearch = '';
  authorDetail = [];
  filteredAuthors = [];

  constructor(private filterauthorname: FilterAuthorNameService,
              private route: ActivatedRoute, private getauthorname: GetAuthorNameService) {
    this.authorDetail = this.getauthorname.viewAuthors;
    console.log(this.authorDetail);
   }

  ngOnInit() {
  }

  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }
}
