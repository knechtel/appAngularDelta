
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login :string = "";
  password :string = "";
  title = 'lojaApp';
  constructor() {}
  ngOnInit() {
  }
  onClickMe() {
    this.password = 'You are my hero!';
    this.login = 'You are my hero!';
  }
}
