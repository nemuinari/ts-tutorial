// chapter 5-1 class declaration
class User<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  public isAdult(): boolean {
    return this.#age >= 18;
  }
}

const uhyo = new User<string>("uhyo", 26, "add data");
const data = uhyo.data;

const john = new User("John Smith", 15, { num: 123 });
const data2 = john.data;

console.log("data; ", data);
console.log("data2; ", data2);
console.log("Is uhyo adult? ", uhyo.isAdult());
console.log("Is john adult? ", john.isAdult());
