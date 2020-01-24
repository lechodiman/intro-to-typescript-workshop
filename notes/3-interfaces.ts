import { HasTail, HasWings, HasLegs } from './1-basics';

/* TYPE ALIAS */

type Color = 'Green' | 'Red' | 'Blue';

type StringOrNumber = string | number;

/* INTERFACES */

// Interfaces behave just like you might think in OOP languages

export interface Flyable extends HasWings {
  fly: () => void;
}

// class Duck implements Flyable {
//   public name = '';
//   public wingType = 'duck wings';
// constructor(name: string) {
//   this.name = name;
// }
//   fly() {
//     console.log("i'm flying");
//   }
// }

// class Duck implements Flyable {
//   constructor(
//     public name: string = '',
//     public wingType: string = 'cool duck wings'
//   ) {}
//   fly() {
//     console.log("i'm flying");
//   }
// }

// const duck: Flyable = {
//   fly() {
//     console.log("i'm flying");
//   },
//   name: 'little duck',
//   wingType: 'little wings'
// };

/* TYPE ALIAS VS INTERFACES */

// interface Point {
//   x: number;
// }
// interface Point {
//   y: number;
// }
// const point: Point = {
//   x: 1,
//   y: 2
// };

// Types do not get multiple declarations merged

// type Point = {
//   x: number;
// };

// type Point = {
//   y: number;
// };
