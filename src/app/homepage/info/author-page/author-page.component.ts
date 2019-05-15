import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FilterAuthorNameService } from '../../../shared/filterauthorname.service';
import { GetAuthorNameService } from '../../../shared/getauthorname.service';

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
    this.route.queryParams.subscribe(
      params => {
          this.name = params.name;
          console.log(this.name);
          this.filterauthorname.toAuthorInfo(this.name);
        });
  }

}
