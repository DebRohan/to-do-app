import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() priorityTask: EventEmitter<string>;
  @Output() searchSubmitted: EventEmitter<string>;

  constructor() {
    this.priorityTask = new EventEmitter();
    this.searchSubmitted = new EventEmitter();
  }

  ngOnInit(): void {}

  filterbyPriority($event: any) {
    this.priorityTask.emit($event.target.value);
  }

  captureSearch($event: any) {
    this.searchSubmitted.emit($event.target.value);
  }
}
