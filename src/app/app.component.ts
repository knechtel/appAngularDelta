import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = '';
  title = 'lojaApp';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
