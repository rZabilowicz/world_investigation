import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  $teamMembers: team[] = [
    {
      url: '../../../assets/ludek1.png',
      name: 'Martin XYZ',
      desc: 'Developer. Nunc molestie eu turpis non ullamcorper. Quisque non risus blandit, tempus orci ac, sollicitudin purus. Ut et molestie nisl, eu molestie dui. ',
    },
    {
      url: '../../../assets/ludek2.png',
      name: 'Anna ABC',
      desc: 'UI/UX Designer. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a placerat arcu, et volutpat nulla. In dolor erat, imperdiet non enim non, tristique porta nisl.',
    },
    {
      url: '../../../assets/ludek3.png',
      name: 'Leonard ASD',
      desc: 'He deals with the business part of the portal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tincidunt libero. Nunc auctor cursus elit eget ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    
  ]
  
}

export interface team{
  url: string;
  name: string;
  desc: string;
}
