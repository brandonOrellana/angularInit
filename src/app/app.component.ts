import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  

  ngOnInit() {
      console.log("hello word");
  }
  ngOnDestroy(): void {
    console.log("bye word");
  }
  showText = false;
  toggleText(event: any): void{
    this.showText = !this.showText;
    console.log(event);
  }

  todaysDate = new Date();

}
