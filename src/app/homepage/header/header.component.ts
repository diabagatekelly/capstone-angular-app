import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  authorSearch = '';
  show = false;
  dropDownMenu = '';
  visible = 'yes';

  toggleCollapse() {
    this.show = !this.show;
    if (this.dropDownMenu === '') {
      this.dropDownMenu = 'down';
    } else {
    this.dropDownMenu = '';
    }
  }

  authorSearchOn() {
    this.authorSearch = 'author-clicked';
  }

  bookSearchOn() {
    this.authorSearch = 'book-clicked';
  }

  constructor() { }

  ngOnInit() {
  }

}

