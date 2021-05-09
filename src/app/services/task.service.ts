import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const url = `${this.apiEndPoint}/tasks`;
    return this.httpClient.get<Task[]>(url);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiEndPoint}/tasks/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateReminderTask(task: Task): Observable<Task> {
    const url = `${this.apiEndPoint}/tasks/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.apiEndPoint}/tasks`;
    return this.httpClient.post<Task>(url, task, httpOptions);
  }
}
