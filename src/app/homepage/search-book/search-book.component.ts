import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookTitleService } from '../../shared/getbooktitle.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
})

export class SearchBookComponent implements OnInit {
  searchabook = '';

  constructor(private getbooktitle: GetBookTitleService, private router: Router) { }

  ngOnInit() {
  }

}
