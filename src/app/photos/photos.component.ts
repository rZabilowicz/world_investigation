import { Component, OnInit,Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime } from "rxjs/operators";
import { map, tap } from "rxjs/operators";
import { PhotoService } from 'src/services/photos.service';
import 'hammerjs';
import 'mousetrap';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  
  values = '';
  queryForm: FormGroup;
  hightForm: number = 800;
  widthForm: number = 800;

  photos: string[] = [];
  resize: boolean= false;

  @Output() queryChange = new EventEmitter<string>();

  descripition: string = 'health';

  constructor(private photosService: PhotoService) {

    this.queryForm = new FormGroup({
      query: new FormControl(this.descripition, {
        validators: [Validators.required, Validators.minLength(3)]
      })
    });

    this.queryForm
      .get("query")
      .valueChanges.pipe(
        debounceTime(400),
        filter(query => query.length >= 3),
        map(query => query.trim()),
        distinctUntilChanged() // Only emit when the current value is different than the last.
      ).subscribe(query => {
          this.descripition = query;
          this.search(this.descripition,this.hightForm,this.widthForm);
        });
   }

  ngOnInit() {
    this.search(this.descripition,this.hightForm,this.widthForm);
  }

  search(query, height, width) {
   this.photos = this.photosService.photoSearch(query, height, width);
  }

  defaultSize() {
    this.hightForm = 800;
    this.widthForm = 800;
    
    if(this.descripition !== '' || this.descripition.length > 2) {
      this.search(this.descripition,this.hightForm,this.widthForm);
    }
  }

  confirmSize() {
    if(this.descripition !== '' || this.descripition.length > 2) {
      this.search(this.descripition,this.hightForm,this.widthForm);
    }
  }

}
