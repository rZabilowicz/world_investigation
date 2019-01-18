import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { PlacesService } from 'src/services/places.service';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { PlacesComponent } from './places/places.component';
import { PhotoService } from 'src/services/photos.service';
import { TimerComponent } from './home/timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TeamComponent } from './contact/team/team.component';
import { InfoComponent } from './contact/info/info.component';
import { ActivitiesComponent } from './contact/activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    ContactComponent,
    PlacesComponent,
    TimerComponent,
    HomeComponent,
    TeamComponent,
    InfoComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ModalGalleryModule,
    
  
  ],
  providers: [
    PlacesService, 
    PhotoService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
