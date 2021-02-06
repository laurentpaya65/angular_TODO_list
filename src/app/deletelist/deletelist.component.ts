import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletelist',
  templateUrl: './deletelist.component.html',
  styleUrls: ['./deletelist.component.scss']
})
export class DeletelistComponent implements OnInit {

  @Input() list;
  
  constructor() { }

  ngOnInit(): void {
  }

}
