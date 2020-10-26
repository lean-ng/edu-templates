import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-expressions',
  templateUrl: './template-expressions.component.html',
  styleUrls: ['./template-expressions.component.css']
})
export class TemplateExpressionsComponent implements OnInit {

  message = 'Hello from the Component-Instance';
  answer = 42;
  later = null;
  nullable: { prop?: string } = {};

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.later = { msg: 'Jetzt bin ich da' };
    }, 3000);
  }

}
