import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { GetAuthorNameService } from '../../../shared/getauthorname.service';
import { switchMap, debounceTime, concatMap } from 'rxjs/operators';

import { FilterAuthorNameService } from 'src/app/shared/filterauthorname.service';


@Component({
  selector: 'app-search-author-results',
  templateUrl: './search-author-results.component.html',
  styleUrls: ['./search-author-results.component.css']
})

export class SearchAuthorResultsComponent implements OnInit {
  authorSearch = '';
  authorDetail = [];

  constructor(private route: ActivatedRoute, private router: Router, private filterauthor: FilterAuthorNameService,
              private getauthorname: GetAuthorNameService) {
    // this.authorDetail = this.getauthorname.viewAuthors;
    // console.log(this.authorDetail);
   }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap((params: Params) => this.filterauthor.onSearchanAuthor([params['q']])
    )).pipe(
      switchMap((res: any) => {
        console.log(res);
        return this.getauthorname.onSearchAuthor(res[0], res[1], res[2]) as any;
      }))
    .subscribe((details) => {
      console.log(details);
      this.authorDetail.splice(0, 1, details);
      console.log(this.authorDetail);
      });
  }


  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }
}
