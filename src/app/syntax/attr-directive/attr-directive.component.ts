import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css']
})
export class AttrDirectiveComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [
    { title: 'Template Syntax', completed: true },
    { title: 'Component Interaction', completed: false },
    { title: 'Services and DI', completed: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
