import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from 'ng-animate';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flipInY, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 2 }
    }))])
  ]
})
export class NavComponent implements OnInit {
  flip: any;

  show = false;

  constructor() { }

  toggleCollapse() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
