import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FilterAuthorNameService } from '../../../shared/filterauthorname.service';
import { GetAuthorNameService } from '../../../shared/getauthorname.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  name;
  authorInfo = [];

  constructor(private route: ActivatedRoute, private filterauthorname: FilterAuthorNameService,
              private getauthorname: GetAuthorNameService) {
    this.authorInfo = this.getauthorname.viewAuthorInfoPage;
    console.log(this.authorInfo);
   }

  ngOnInit() {
      this.route.queryParams.pipe(
        switchMap((params: Params) => this.getauthorname.getAuthorPage(+[params['authorID']])
      ))
      .subscribe(details => {
        console.log(details);
        this.authorInfo = details;
        console.log(this.authorInfo);
      });
  }

}
