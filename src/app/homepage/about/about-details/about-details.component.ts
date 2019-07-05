import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      easing: 'ease-out'
    });
  }

}
