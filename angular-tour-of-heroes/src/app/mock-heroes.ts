import { Hero } from "./hero";
import { ITEMS } from './mock-items';

export const HEROES: Hero[] = [
  {id: 11, name: 'Dr Nice', items: [ITEMS[0], ITEMS[9]], money: 45,},
  {id: 12, name: 'Narco', items: [ITEMS[1], ITEMS[5]], money: 58,},
  {id: 13, name: 'Bombasto', items: [ITEMS[9], ITEMS[2]], money: 47,},
  {id: 14, name: 'Celeritas', items: [ITEMS[6], ITEMS[1]], money: 20,},
  {id: 15, name: 'Magnete', items: [ITEMS[7], ITEMS[0]], money: 69,},
  {id: 16, name: 'RubberMan', items: [ITEMS[5], ITEMS[8]], money: 100,},
  {id: 17, name: 'Dynama', items: [ITEMS[4], ITEMS[7]], money: 49,},
  {id: 18, name: 'Dr IQ', items: [ITEMS[9], ITEMS[2]], money: 80,},
  {id: 19, name: 'Magma', items: [ITEMS[1], ITEMS[0]], money: 61,},
  {id: 20, name: 'Tornado', items: [ITEMS[8], ITEMS[9]], money: 51,},
];