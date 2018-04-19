import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  aloneImageArray = [
    '/assets/HighresScreenshot00006.png',
    '/assets/HighresScreenshot00007.png',
    '/assets/HighresScreenshot00008.png',
    '/assets/HighresScreenshot00009.png',
    '/assets/HighresScreenshot00010.png'
  ];

  vacationSurvivalImageArray = [
    '/assets/vacationSurvival1.png',
    '/assets/vacationSurvival2.png',
    '/assets/vacationSurvival3.png',
    '/assets/vacationSurvival4.png',
    '/assets/vacationSurvival5.png',
    '/assets/vacationSurvival6.png',
    '/assets/vacationSurvival7.png',
    '/assets/vacationSurvival8.png',
    '/assets/vacationSurvival9.png',
    '/assets/vacationSurvival10.png'
  ];

  aloneDesc = '"Alone" VR, a space adventure experience is in development for the Oculus store. Pilot your very own star' +
    'ship and explore various parts of the cosmos. Shoot down remnants of war as you traverse through asteroid fields. Harness' +
    'the elements of the universe and find your way back home."Alone" VR, a space adventure experience is in development for' +
    'the Oculus store. Pilot your very own star ship and explore various parts of the cosmos. Shoot down remnants of war as you' +
    'traverse through asteroid fields. Harness the elements of the universe and find your way back home.';

  vacationDesc = 'enter a description here';

  constructor() { }

  ngOnInit() { }

}
