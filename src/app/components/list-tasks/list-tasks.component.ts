import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-list-tasks',
  templateUrl: 'list-tasks.component.html',
  styleUrls: ['list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() priority: string;
  @Input() search: string;
  @Output() taskDeleted: EventEmitter<number>;
  taskAssigned: Task[];

  constructor() {
    this.tasks = [];
    this.taskDeleted = new EventEmitter();
    this.priority = '';
    this.taskAssigned = [];
    this.search = '';
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.priority !== '') {
      this.taskAssigned = this.tasks.filter(
        task => task.priority === this.priority
      );
    } else if (this.search !== '') {
      this.taskAssigned = this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.taskAssigned = this.tasks;
    }
    //console.log(this.tasks);
  }

  deleteTask(pId: number) {
    this.taskDeleted.emit(pId);
  }
}
