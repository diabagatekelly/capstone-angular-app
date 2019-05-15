import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GetAuthorNameService } from '../../../shared/getauthorname.service';


@Component({
  selector: 'app-search-author-results',
  templateUrl: './search-author-results.component.html',
  styleUrls: ['./search-author-results.component.css']
})

export class SearchAuthorResultsComponent implements OnInit {
  authorSearch = '';
  authorDetail = [];

  constructor(private route: ActivatedRoute, private router: Router, private getauthorname: GetAuthorNameService) {
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
