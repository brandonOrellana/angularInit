import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {
  title = "hello a  word";
  constructor() { }

  ngOnInit(): void {
  }

}
