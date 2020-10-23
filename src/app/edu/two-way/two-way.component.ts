import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = ['Template Syntax', 'Component Interaction', 'Services and DI'];
  newTopic = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(): void {
    const topic = this.newTopic.trim();
    if (topic) {
      this.topics.push(topic);
    }
    this.newTopic = '';
  }
}
