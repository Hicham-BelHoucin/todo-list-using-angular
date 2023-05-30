import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-first-project';
  todolist: string[] = [];
  value = '';

  constructor() {
    this.todolist = localStorage.getItem('todo')?.split(',') || [];
  }

  onKey(event: any) {
    this.value = event.target.value;
  }

  addTask(task: string) {
    // Check if the task is empty or already exists in the list
    if (task.trim() === '' || this.todolist.includes(task)) {
      return;
    }

    this.todolist.push(task);
    localStorage.setItem('todo', this.todolist.join(','));
    this.value = '';
  }

  deleteTask(task: string) {
    this.todolist = this.todolist.filter((t) => t !== task);
    localStorage.setItem('todo', this.todolist.join(','));
  }
}
