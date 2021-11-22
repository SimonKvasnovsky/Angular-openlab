import { Component, OnInit } from '@angular/core';
import { Item  } from '../items'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  selectedItem?: Item;
  items: Item[] = [];
  constructor(private itemService: ItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`ItemsComponent: Selected item id=${item.id}`);
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
}
