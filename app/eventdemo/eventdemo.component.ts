import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show()
  {
    alert("welcome to angular")
  }

  trainer()
  {
    alert("traine sis prassana paapu..")
  }

}
