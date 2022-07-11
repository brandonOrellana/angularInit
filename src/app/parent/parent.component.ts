import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: any){
    alert(msg);
  }

  ngAfterViewInit(){
    alert(this.child.message);
  }
}
