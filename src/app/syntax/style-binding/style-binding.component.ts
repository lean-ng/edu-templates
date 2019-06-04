import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

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
