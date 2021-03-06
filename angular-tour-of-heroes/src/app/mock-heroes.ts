import { Hero } from "./hero";
import { ITEMS } from './mock-items';

export const HEROES: Hero[] = [
  {id: 11, name: 'Dr Nice', items: [ITEMS[0], ITEMS[9]], money: 850,},
  {id: 12, name: 'Narco', items: [ITEMS[1], ITEMS[5]], money: 1000,},
  {id: 13, name: 'Bombasto', items: [ITEMS[9], ITEMS[2]], money: 4600,},
  {id: 14, name: 'Celeritas', items: [ITEMS[6], ITEMS[1]], money: 2000,},
  {id: 15, name: 'Magnete', items: [ITEMS[7], ITEMS[0]], money: 500,},
  {id: 16, name: 'RubberMan', items: [ITEMS[5], ITEMS[8]], money: 8520,},
  {id: 17, name: 'Dynama', items: [ITEMS[4], ITEMS[7]], money: 5000,},
  {id: 18, name: 'Dr IQ', items: [ITEMS[9], ITEMS[2]], money: 800,},
  {id: 19, name: 'Magma', items: [ITEMS[1], ITEMS[0]], money: 630,},
  {id: 20, name: 'Tornado', items: [ITEMS[8], ITEMS[9]], money: 250,},
];