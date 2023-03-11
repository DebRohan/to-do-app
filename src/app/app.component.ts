import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() priority: string;
  arrTasks: Task[];
  search: string;

  constructor() {
    this.arrTasks = [ ];

    this.priority = '';

    this.search = '';
  }

  onDeleteTask($event: number) {
    this.arrTasks = this.arrTasks.filter(task => task.id !== $event);
  }

  onTaskSave($event: Task) {
    this.arrTasks.push($event);
  }

  onFilterPriority($event: string) {
    this.priority = $event;
  }

  onSearch($event: string) {
    this.search = $event;
    //console.log(this.search);
  }
}
