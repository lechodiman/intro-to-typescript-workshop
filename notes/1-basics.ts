// TS Basic Types

// number
// boolean
// string
// Date
// Array<T>
// Object

/* Variable reassignment throws a compilation error if types don't match */

// let myDog = 'Domi';
// let myDog: string = 'Domi'; // equivalent
// myDog = 3; // ERROR
// myDog = 'Pia'; // GOOD

/* Let vs Const */

// const myDog = 'Domi';
// let ourDog = 'China';

/* ARRAYS */

// let arr = [];
// arr.push(23);
// arr.push('hola');

// let numbersArray: number[] = [];
// numbersArray.push(23);
// numbersArray.push('hola'); // Error

/* TUPLES */

// let dog = 'domi';
// const setDog = (newDog: string) => {
//   dog = newDog;
// };

// let tuple: [string, (newDog: string) => void] = [dog, setDog];

/* OBJECTS */

/* Object types can be expressed inside {} */

// let myDog: { name: string; breed: string };
// myDog = {
//   name: 'Domi',
//   breed: 'Puddle'
// };

// // Error
// myDog = {
//   name: 'Otta'
// };

/* Using the optional operator */

// let myCat: {
//   name: string;
//   breed?: string;
// };

// myCat = {
//   name: 'michi'
// };

/* UNION & INTERSECTION */

/* Sometimes types can be one of several things */

export interface HasWings {
  name: string;
  wingType: string;
}

export interface HasTail {
  name: string;
  tailType: string;
}

export interface HasLegs {
  name: string;
  numberOfLegs: number;
}

// let randomAnimal: HasWings | HasTail =
//   Math.random() > 0.5
//     ? {
//         name: 'Eagle',
//         wingType: 'lots of feathers'
//       }
//     : {
//         name: 'Peppa Pig',
//         tailType: 'very cute tail'
//       };

// randomAnimal.name;

/* INTERSECTION TYPES */

// let otherAnimal: HasWings & HasTail = {
//   name: 'Viseryon',
//   tailType: 'super cool dragon one',
//   wingType: 'those huge ones'
// };

// otherAnimal.name; // we can access anything on _either_ type
// otherAnimal.email;
// otherAnimal.phone;
