// chapter 5-2 class declaration
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

  protected getAge(): number {
    return this.#age;
  }
}

class Admin extends User {
  rank: number = 1;

  public override isAdult(): boolean {
    return this.getAge() >= 18;
  }
}

const uhyo: User = new User("uhyo", 18);
const john: Admin = new Admin("john", 18);

console.log(uhyo.name); // "uhyo"
console.log(uhyo.isAdult()); // false

console.log(john.name); // "john"
console.log(john.isAdult()); // true
console.log(john.rank); // 1
