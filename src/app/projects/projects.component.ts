import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  imageArray = [
    '/assets/HighresScreenshot00006.png',
    '/assets/HighresScreenshot00007.png',
    '/assets/HighresScreenshot00008.png',
    '/assets/HighresScreenshot00009.png',
    '/assets/HighresScreenshot00010.png'
  ];

  constructor() { }

  ngOnInit() { }

}
