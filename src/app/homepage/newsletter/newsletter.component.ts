import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      easing: 'ease-out'
    });
  }

}
