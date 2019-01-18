import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  actualTime
  time: string;
  date: string;

  ngOnInit() {
    this.actualTime = new Date();
    this.timer
  }

  constructor() {   
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  timer = setInterval(
    () => this.getTime(),
    1000); 

  getTime() {
    this.actualTime = new Date();

    let hours = this.actualTime.getHours();
    if (hours<10) {hours = '0' + hours;}
    let minutes = this.actualTime.getMinutes();
    if (minutes<10) {minutes = '0' + minutes;}
    let seconds = this.actualTime.getSeconds();
    if (seconds<10) {seconds = '0' + seconds;}

    this.time = hours + ':' + minutes + ':' + seconds ;
    
    let day = this.actualTime.getDate();
    if (day<10) {day = '0' + day;}
    let month = this.actualTime.getMonth() + 1;
    if (month<10) {month = '0' + month;}
    let year = this.actualTime.getFullYear();

    this.date = day + '.' + month + '.' + year;
  }
}