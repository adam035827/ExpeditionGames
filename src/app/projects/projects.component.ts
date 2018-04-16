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

  aloneDesc = '"Alone" VR, a space adventure experience is in development for the Oculus store. Pilot your very own star' +
    'ship and explore various parts of the cosmos. Shoot down remnants of war as you traverse through asteroid fields. Harness' +
    'the elements of the universe and find your way back home."Alone" VR, a space adventure experience is in development for' +
    'the Oculus store. Pilot your very own star ship and explore various parts of the cosmos. Shoot down remnants of war as you' +
    'traverse through asteroid fields. Harness the elements of the universe and find your way back home.';

  constructor() { }

  ngOnInit() { }

}
