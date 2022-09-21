import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskList: Array<TaskList> = [];

  constructor() {}

  ngOnInit(): void {
    const lista = localStorage.getItem('lista');
    if (lista) {
      this.taskList = JSON.parse(lista);
    }
  }

  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
    localStorage.setItem('lista', JSON.stringify(this.taskList));
  }

  deleteAllTaskList() {
    this.taskList = [];
    localStorage.setItem('lista', JSON.stringify(this.taskList));
  }

  addItemTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
    localStorage.setItem('lista', JSON.stringify(this.taskList));
  }
}
