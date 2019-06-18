import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInRight } from 'ng-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceInRight, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 10,
        a: '-3000px',
        b: '25px',
        c: '-10px',
        d: '5px', }
    }))
  ])
  ]
})

export class HeaderComponent implements OnInit {
  bounce: any;

  authorSearch = '';

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


