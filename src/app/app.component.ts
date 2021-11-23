import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name: string;
  todos = Array();
  todo: FormGroup;
  subtasks?: Task[];
  checks = Array();
  checktodo: string[];

  constructor(private fb: FormBuilder) {}

  allComplete: boolean = false;

  ngOnInit() {
    this.todo = new FormGroup({
      name: new FormControl(),
    });
    this.todos;
  }

  delete(i) {
    this.todos.splice(i, 1);
  }

  check(i) {}

  addToDo() {
    this.todos.push({
      name: this.todo.controls.name.value,
      hide: true,
      //uniq: Math.random() * 10,
    });
    this.todos;
  }

  addToDone(i, event) {
    if (event.checked) {
      // this.checks.push({
      //   name: this.todos[i].name,
      // });
      //this.todos[i].name = 'test';
      this.todos[i].hide = false;
    } else {
      // this.checks.splice(i, 1);
      //this.todos[i].name = '';
      this.todos[i].hide = true;
    }
    this.checks;
  }
}
