import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'photos', component: PhotosComponent},
   {path: 'places', component: PlacesComponent},
   {path: 'contact', component: ContactComponent},
  ];
  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
        
        })
      ],
      exports: [RouterModule]
  })
  export class AppRoutingModule { }