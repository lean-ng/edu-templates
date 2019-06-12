import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive',
  templateUrl: './struct-directive.component.html',
  styleUrls: ['./struct-directive.component.css']
})
export class StructDirectiveComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics = [];

  constructor() { }

  ngOnInit() {
  }

  addTopic(title) {
    this.topics.push({ title });
  }
}
