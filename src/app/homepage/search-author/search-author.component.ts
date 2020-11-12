import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {
  searchauthor = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
