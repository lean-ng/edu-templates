import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-vars',
  templateUrl: './template-ref-vars.component.html',
  styleUrls: ['./template-ref-vars.component.css']
})
export class TemplateRefVarsComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = ['Template Syntax', 'Component Interaction', 'Services and DI'];

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(topic: string): void {
    if (topic) {
      this.topics.push(topic);
    }
  }
}
