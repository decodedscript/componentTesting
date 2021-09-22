import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchPayload } from '../model/Search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchPayload = new EventEmitter<SearchPayload>();
  @Input() hasEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }
  search(name: string, email: string) {
    if (name && email) {
      let searchFormValue: SearchPayload = { email: email, name: name }
      this.searchPayload.emit(searchFormValue);
    }
  }
}
