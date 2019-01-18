import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { PlacesService } from 'src/services/places.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Results, RootObject } from '../models/places';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  placeDesc: Results = {
    sunrise: 'Loading..',
    sunset: 'Loading..',
    solar_noon: 'Loading..',
    day_length: 'Loading..',
    civil_twilight_begin: 'Loading..',
    civil_twilight_end: 'Loading..',
    nautical_twilight_begin: 'Loading..',
    nautical_twilight_end: 'Loading..',
    astronomical_twilight_begin: 'Loading..',
    astronomical_twilight_end: 'Loading..',
}
  form: FormGroup;
  lat: string = '+12.8';
  lng: string = '-64.2';

  @Output() queryChange = new EventEmitter<string>();

  constructor(private placesService: PlacesService) { 
    this.form = new FormGroup({
      height: new FormControl(this.lat, {
        validators: [
          Validators.required, 
          Validators.minLength(1),
          Validators.pattern(/^0|((\-|\+)[1-8][0-9].[0-9]{3,10})|((\-|\+)[9][0])|((\-|\+)[1-8][0-9])|((\-|\+)[0-9].[0-9]{1,10})|((\-|\+)[1-9])$/)
        ]
      }),
      width: new FormControl(this.lng, {
        validators: [
          Validators.required, 
          Validators.minLength(1),
          Validators.pattern(/^0|((\-|\+)[1-8][0-9].[0-9]{3,10})|((\-|\+)[9][0])|((\-|\+)[1-8][0-9])|((\-|\+)[0-9].[0-9]{1,10})|((\-|\+)[1-9])$/)
        ]
      })
    });
    this.confirm();
  }
  
  confirm() {
    this.search(this.form.get("height").value,this.form.get("width").value);
  }

  search(height, width) {
    this.placesService.searchPlaces(height, width).subscribe(
      data => {
        this.placeDesc = data.results;
        console.log(this.placeDesc);
      },
      (error: HttpErrorResponse) => {
        console.error('Places error:' + error.status);
      }
    );
  }

  random() {
    this.form.setValue({
      height: this.generateRandomInteger(-90, 90),
      width: this.generateRandomInteger(-90, 90)
    });
    this.confirm();
  }
  
  generateRandomInteger(min, max) {
    let integer:any = min + Math.random()*(max + 1 - min);
    if(integer > 0) {
      return '+' + integer.toFixed(4).toString();
    }else{
      return integer.toFixed(4).toString();
    }
  }

  ngOnInit() {
    
  }

  buttonContol () {
    
  }
  

}
