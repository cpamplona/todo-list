import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-btn-unit',
  template: `
    <input class="todo-input" type="text" [value]="title" #firstTextBox>
    <button class="btn"
        (click)="submitValue(firstTextBox.value)">
  Save
</button>
  `,
  styleUrls: ['./input-btn-unit.component.scss']
})
export class InputBtnUnitComponent implements OnInit {

  title = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
