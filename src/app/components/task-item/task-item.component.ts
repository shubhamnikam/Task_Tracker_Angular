import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() eventOnDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() eventOnUpdateReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.eventOnDeleteTask.emit(task);
  }

  onUpdateReminder(task: Task): void {
    this.eventOnUpdateReminder.emit(task);
  }
}
