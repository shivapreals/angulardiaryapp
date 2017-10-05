import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  task='';
tasklist:string[];
constructor() {
  this.tasklist = ['SBI', 'AXIS'];
  }
add=function(){
this.tasklist.push(this.task);
}
}
