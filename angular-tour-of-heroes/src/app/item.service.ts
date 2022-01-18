import { Item } from './items';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ITEMS2 } from './mock-items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    const items = of(ITEMS2);
    this.messageService.add('ItemService: fetched items');
    return items;
  }
}