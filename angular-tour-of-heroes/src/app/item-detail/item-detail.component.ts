import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item?: Item;
  @Output() deleteEvent = new EventEmitter();
  constructor() { }
 
  ngOnInit(): void {
  }
  callParentDelete(){
    this.deleteEvent.emit();
  }
  sellItem(){

  }
 

}
