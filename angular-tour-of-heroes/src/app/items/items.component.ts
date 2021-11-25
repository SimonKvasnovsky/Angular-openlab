import { Component, OnInit } from '@angular/core';
import { Item  } from '../items'
import { MessageService } from '../message.service';
import { ItemService } from '../item.service';
import { ITEMS2 } from '../unusedMock-items';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = ITEMS2;
  hero?: Hero; 

  selectedItem?: Item;
  
  constructor(private itemService: ItemService, private messageService: MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,)
   { }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`ItemsComponent: Selected item id=${item.id}`);
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
  buyItem(): void {
    if(this.selectedItem && this.hero){
      if(this.hero.money>= this.selectedItem.price){
        const index = this.items.indexOf(this.selectedItem, 0);
        if (index > -1) {
         this.items.splice(index, 1);
        }
        this.hero.money -= this.selectedItem.price;
        this.hero.items.push(this.selectedItem);
      }
    
   
    }
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
}
