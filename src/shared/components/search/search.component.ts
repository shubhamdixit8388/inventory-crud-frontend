import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Input() value: string;
  @Input() placeholder: string;

  @ViewChild('FilterInput') filterInput: ElementRef;

  @Output() searchString = new EventEmitter<string>();

  public searchTextUpdate = new Subject<string>();

  constructor() {
  }

  public ngOnInit(): void {
    this.searchTextUpdate
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.value = value;
        this.searchString.emit(value);
      });
  }

  public onClear(): void {
    this.value = '';
    this.searchString.emit(this.value);
  }
}
