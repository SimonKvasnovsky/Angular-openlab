import { Item } from './items';
import { ITEMS } from './mock-items';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    this.messageService.add('ItemService: fetched items');
    return items;
  }
}