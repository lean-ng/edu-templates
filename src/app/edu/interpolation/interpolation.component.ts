import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = ['Template Syntax', 'Component Interaction', 'Services and DI'];

  constructor() { }

  ngOnInit(): void {
  }

}
