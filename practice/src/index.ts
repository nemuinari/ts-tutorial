// chapter 07: export and import
import { uhyoName, uhyoAge } from "./uhyo.js";
import { getName } from "./uhyo.js";
import { type Animal, tama } from "./animal.js";
import { type Human } from "./human.js";

console.log(`My name is ${uhyoName} and ${uhyoAge} years old.`);
console.log(`My name is ${getName()}.`);

const myCat: Animal = { ...tama };
console.log(`I have a ${myCat.species} is ${myCat.age} years old.`);

export const uhyo: Human = {
  name: "uhyo",
  age: 26,
};
console.log(`Exported human: ${uhyo.name}, age ${uhyo.age}`);
