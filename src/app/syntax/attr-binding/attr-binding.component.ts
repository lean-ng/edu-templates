import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.css']
})
export class AttrBindingComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [
    { id: 1, title: 'Template Syntax', completed: true, important: false },
    { id: 2, title: 'Component Interaction', completed: false, important: true },
    { id: 3, title: 'Services and DI', completed: false, important: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
