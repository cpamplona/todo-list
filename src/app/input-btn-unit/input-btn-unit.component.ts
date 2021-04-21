import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-btn-unit',
  template: `
    <input type="text" [value]="title" #firstTextBox>
    <button (click)="changeTitle(firstTextBox.value)"> Save </button>
  `,
  styleUrls: ['./input-btn-unit.component.scss']
})
export class InputBtnUnitComponent implements OnInit {

  title = 'Hello World';
  constructor() {
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
