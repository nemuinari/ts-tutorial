// chapter 5-3 class declaration
class User {
  name: string;
  #age: number; // private field

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo: User = new User("uhyo", 20);
const john: User = new User("john", 10);

console.log(uhyo.isAdult()); // true

console.log(uhyo.isAdult.apply(john, [])); // false
console.log(uhyo.isAdult.call(john)); // false
console.log(uhyo.isAdult.bind(john)()); // false
