import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refvars',
  templateUrl: './template-refvars.component.html',
  styleUrls: ['./template-refvars.component.css']
})
export class TemplateRefvarsComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = ['Template Syntax', 'Component Interaction', 'Services and DI'];

  constructor() { }

  ngOnInit() {
  }

}
