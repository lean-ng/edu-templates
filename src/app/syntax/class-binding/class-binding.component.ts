import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [
    { id: 1, title: 'Template Syntax', completed: false, important: false },
    { id: 2, title: 'Component Interaction', completed: false, important: true },
    { id: 3, title: 'Services and DI', completed: false, important: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
