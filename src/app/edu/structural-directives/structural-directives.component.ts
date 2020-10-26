import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(title: string): void {

  }

  toggleTopic(topic: { title: string, completed: boolean}): void {

  }
}
