import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'angular.io';
  topics: { title: string, completed: boolean }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(title: string): void {
    this.topics.push({ title, completed: false });
  }

  toggleTopic(topic: { title: string, completed: boolean}): void {
    topic.completed = !topic.completed;
  }
}
