import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  
  $contact: Contact = {
    street:'4060 Randall Drive',
    city:'Kohala',
    state:'HI',
    stateFull:'Hawaii',
    zipcode: 96755,
    phoneNumber: 808-844-9808,
    mobileNumber: 808-282-6645,
    mail: 'world@investigation.com'
  }

}

export interface Contact {
  street: string;
  city: string;
  state: string;
  stateFull: string;
  zipcode: number;
  phoneNumber: number;
  mobileNumber?: number;
  mail: string;
  timezone?: string;
}
