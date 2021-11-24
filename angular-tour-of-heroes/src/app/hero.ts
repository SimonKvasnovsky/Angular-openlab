import { Item } from "./items"
export interface Hero {
    id: number;
    name: string;
    items: Item[];
    money: number;
  }