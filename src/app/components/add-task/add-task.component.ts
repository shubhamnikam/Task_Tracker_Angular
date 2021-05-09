import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  @Output() eventOnAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder = false;
  showAddTask = false;
  subscription = Subscription;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}


  onSubmit(): void {
    // do validation
    if (!this.text?.trim()) {
      alert('): Please add a task!');
      return;
    }

    // create obj
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit event
    this.eventOnAddTask.emit(newTask);

    // reset form field values
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
