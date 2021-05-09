import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => {
        return item.id !== task.id;
      });
      console.log(`deleted task`);
    });
  }

  updateReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateReminderTask(task).subscribe(() => {
      console.log(`updated reminder`);
    });
  }

  addTask(newTask: Task): void {
    this.taskService.addTask(newTask).subscribe(
      (task) => {
        this.tasks.push(task);
        console.log(':) New task added');
      },
      (error) => {
        alert('): Error occurred');
        console.log('): Error occurred', error);
      }
    );
  }
}
