// chapter 07: export and import
import { uhyoName, uhyoAge } from "./uhyo.js";
import { getName } from "./uhyo.js";
import { type Animal, tama } from "./animal.js";
import { type Human } from "./human.js";
import { readFileSync } from "fs";

console.log(`My name is ${uhyoName} and ${uhyoAge} years old.`);
console.log(`My name is ${getName()}.`);

const myCat: Animal = { ...tama };
console.log(`I have a ${myCat.species} is ${myCat.age} years old.`);

export const uhyo: Human = {
  name: "uhyo",
  age: 26,
};
console.log(`Exported human: ${uhyo.name}, age ${uhyo.age}`);

const data = readFileSync("uhyo.txt", { encoding: "utf-8" });
let count = 0;
let currentIndex = 0;

while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
