import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-input-btn-unit></app-input-btn-unit>

    <ul>
      <li *ngFor="let item of todoList">
        {{ item.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
