import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
 
@Injectable()
export class PhotoService {
    
    public photos: string[] = [];

    constructor(private http: Http) {}

    photoSearch(searchPhoto: string, height, width) {
        for(let i=0; i <12; i++){
            let url = 'https://source.unsplash.com/'+ (height+i) + 'x' + (width+i) + '/?'+ searchPhoto;
            this.http.get(url).subscribe(
                data => {
                    this.photos[i] = data.url;
                },
                (error: HttpErrorResponse) => {
                    console.error('Bad connection with photo database:' + error.status);
                }
            );
        }
        return this.photos;
    }
}
