import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-btn-unit',
  template: `
    <p>
      input-btn-unit works!
    </p>
    The title is: {{title}}
  `,
  styleUrls: ['./input-btn-unit.component.scss']
})
export class InputBtnUnitComponent implements OnInit {

  title = 'Hello World';

  constructor() {
    this.changeTitle('My First Angular App');
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
