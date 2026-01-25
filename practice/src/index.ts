// typescript code
type Animal = {
  age: number;
};

type Human = {
  age: number;
  name: string;
};

type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};

type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};

const obj: AnimalFamily | HumanFamily = {
  familyName: "Smith",
  mother: { age: 40, name: "Jane" },
  father: { age: 42, name: "John" },
  child: { age: 10, name: "Junior" },
};

console.log(`Family name is ${obj.familyName}`);
console.log(`Mother's name is ${obj.mother.name}, age is ${obj.mother.age}`);
console.log(`Father's name is ${obj.father.name}, age is ${obj.father.age}`);
console.log(`Child's name is ${obj.child.name}, age is ${obj.child.age}`);
