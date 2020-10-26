import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.css']
})
export class AttrBindingComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics: { id: number, title: string }[] = [
    { id: 1, title: 'Template Syntax' },
    { id: 2, title: 'Component Interaction' },
    { id: 3, title: 'Services and DI' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
