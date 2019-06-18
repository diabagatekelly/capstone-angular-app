import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flipInY, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 2 }
    }))])
  ],
})
export class AppComponent {
  flip: any;

  title = 'Final-project';
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }
}
