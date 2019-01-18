import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: '<div class="row activities"\>' +
                '<div class="col-sm-12"\>' +
                  '<h1>{{$title}}</h1\>' +
                  '<p>{{$content}}</p\>' +
                '</div\>' +
              '</div\>',
  styleUrls: ['./activities.component.scss']
})

export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  $title = 'Our Activities'
  $content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, dui eget feugiat bibendum, dolor ligula consectetur orci, vel sodales est massa vel massa. Vestibulum et ligula sit amet dui efficitur cursus ut et diam. In blandit turpis vitae blandit molestie. Nunc vulputate mauris vitae odio blandit sollicitudin. Ut tristique eros a vehicula gravida. Aliquam sit amet nisi cursus, sagittis ante ut, aliquet lectus. Proin nec commodo turpis, ut hendrerit ante. Sed condimentum massa nulla, a tempus mauris pellentesque a. Sed sagittis auctor odio, non placerat diam maximus et. Donec id ipsum odio. Fusce dapibus sodales erat, vitae scelerisque turpis faucibus sed. Fusce ut commodo risus, quis pretium lectus. Integer pellentesque mi venenatis scelerisque semper.';

}
