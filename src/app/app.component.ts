import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myProp:string = 'Go ahead, click that button!';
  myArr = [
    {title:'title 01'},
    {title:'title 02'},
    {title:'title 03'},
    {title:'title 04'},
  ];
  clickBtn() {
    this.myProp = 'Changed';
  } 
}
