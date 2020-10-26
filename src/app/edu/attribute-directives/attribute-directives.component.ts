import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [
    { title: 'Template Syntax', completed: true },
    { title: 'Component Interaction', completed: false },
    { title: 'Services and DI', completed: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleTopic(topicIx: number): void {
    this.topics[topicIx].completed = !this.topics[topicIx].completed;
  }
}
