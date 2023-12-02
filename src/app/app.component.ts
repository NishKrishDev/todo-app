import { Component, OnInit } from '@angular/core';
import { TaskInterface } from './task-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG TODO APP';

  task: string = '';
  priority: string = 'Select Priority';

  highPriorityTasks: TaskInterface[] = [];
  lowPriorityTasks: TaskInterface[] = [];

  editHighTask: boolean = false;

  getValue() {

    let singleTask: TaskInterface = {
      task: this.task,
      priority: this.priority
    }

    if (singleTask.priority == 'high') {
      this.highPriorityTasks.push(singleTask);
      localStorage.setItem('High Priority Tasks', JSON.stringify(this.highPriorityTasks))
    }

    else if (singleTask.priority == 'low') {
      this.lowPriorityTasks.push(singleTask);
      localStorage.setItem('Low Priority Tasks', JSON.stringify(this.lowPriorityTasks))
    }

    this.task = '';
    this.priority = 'Select Priority'
  }

  deleteHighTask(i: number) {
    this.highPriorityTasks.splice(i, 1);
    localStorage.setItem('High Priority Tasks', JSON.stringify(this.highPriorityTasks))
  }

  deleteLowTask(i: number) {
    this.lowPriorityTasks.splice(i, 1);
    localStorage.setItem('Low Priority Tasks', JSON.stringify(this.lowPriorityTasks))
  }

  completeHighTask(i: number) {
    alert('Completed');
    this.highPriorityTasks.splice(i, 1);
    localStorage.setItem('High Priority Tasks', JSON.stringify(this.highPriorityTasks))
  }

  completeLowTask(i: number) {
    alert('Completed');
    this.lowPriorityTasks.splice(i, 1);
    localStorage.setItem('Low Priority Tasks', JSON.stringify(this.lowPriorityTasks))
  }

  ngOnInit(): void {
    let savedHighTasks = localStorage.getItem('High Priority Tasks');
    let savedLowTasks = localStorage.getItem('Low Priority Tasks');

    this.highPriorityTasks = savedHighTasks ? JSON.parse(savedHighTasks) : [];
    this.lowPriorityTasks = savedLowTasks ? JSON.parse(savedLowTasks) : []
  }

}
