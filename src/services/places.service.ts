import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/models/places';

 
@Injectable()
export class PlacesService {
    
    place;
    private placeUrl: string = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today'

    constructor(private http: HttpClient) {}


    searchPlaces(searchPlaceWidth, searchPlaceHeight):Observable<RootObject> {
        let url = 'https://api.sunrise-sunset.org/json?lat=' + searchPlaceHeight +'&lng=' + searchPlaceWidth + '&date=today';
        return this.http.get<RootObject>(url);
    }


}