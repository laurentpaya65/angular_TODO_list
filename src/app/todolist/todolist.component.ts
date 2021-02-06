import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  // données reçues du parent
  @Input() list;

  @Output() doneEvent = new EventEmitter();


  constructor() { 
    console.log(this);
  }

  ngOnInit(): void {
  }

  moveTaskInDoneList(index) {
    console.log(index);
    this.doneEvent.emit(index);
  }
}
