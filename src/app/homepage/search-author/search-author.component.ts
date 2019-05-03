import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterAuthorNameService} from '../../shared/filterauthorname.service';
import { GetAuthorNameService } from '../../shared/getauthorname.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {
searchauthor = '';

  constructor(private filterauthorname: FilterAuthorNameService,
              // private getauthorname: GetAuthorNameService,
              private router: Router) { }

  onSearchAuthor() {
    this.filterauthorname.onSearchanAuthor(this.searchauthor, event);
    console.log(this.searchauthor);
  }

  onLoad() {
    this.router.navigate(['search-author-results'],
     {queryParams: {q: this.searchauthor}});
  }

  ngOnInit() {
  }

}
