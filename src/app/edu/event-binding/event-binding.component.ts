import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

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
