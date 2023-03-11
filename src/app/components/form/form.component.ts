import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string;
  priority: string;
  id: number;
  @Output() formSubmitted: EventEmitter<Task>;

  constructor() {
    this.title = '';
    this.priority = '';
    this.id = 4;
    this.formSubmitted = new EventEmitter();
  }

  ngOnInit(): void {}

  SaveData() {
    const newTask: Task = {
      id: this.id,
      title: this.title,
      priority: this.priority
    };
    this.formSubmitted.emit(newTask);
    this.id++;
  }
}
