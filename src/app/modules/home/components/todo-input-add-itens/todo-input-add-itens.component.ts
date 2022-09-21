import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() emitItemTaskList: EventEmitter<string> = new EventEmitter();

  task: string = '';

  submitItemTaskList() {
    if (this.task.trim().length > 0) {
      this.emitItemTaskList.emit(this.task);
      this.task = '';
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
