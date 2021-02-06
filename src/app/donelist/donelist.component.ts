import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.scss']
})
export class DonelistComponent implements OnInit {

  @Input() list;
  @Output() doneEvent:EventEmitter<string> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  moveTaskInTodoList(task) {
    this.doneEvent.emit(task);
  }
  deleteTask(task) {
    this.deleteEvent.emit(task);
  }

}
