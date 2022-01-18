import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { ITEMS, ITEMS2 } from '../mock-items';
import { ReplaySubject } from 'rxjs';
import { Item } from '../items';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;
  itemsFree = ITEMS2;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  click():void{}
  
  sellItem(item: Item): void {
    if(item.isAvailable == false){
      this.hero.money += item.price;
      item.isAvailable = true;
      this.itemsFree.push(item);
      this.deleteMsg(item);
    }
  }

  deleteMsg(item:Item) {
    const index: number = this.hero.items.indexOf(item);
    if (index !== -1) {
        this.hero.items.splice(index, 1);
    }
  }

}