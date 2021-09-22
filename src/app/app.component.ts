import { Component } from '@angular/core';
import { SearchPayload } from './model/Search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentTesting';

  constructor() {

  }
  onSearchPayload(event: SearchPayload) {
    console.log(event)
  }
}
