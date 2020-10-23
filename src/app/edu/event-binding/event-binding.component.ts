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

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(ev: Event): void {
    ev.preventDefault();

    // Look up input field
    const inputFld = (ev.target as HTMLElement).querySelector('input');
    const topic = inputFld.value.trim();
    if (topic) {
      this.topics.push(topic);
    }
    inputFld.value = '';
  }
}
