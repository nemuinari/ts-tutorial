// typescript code
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const obj: Person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

console.log(`Name: ${obj.name}, Age: ${obj.age}, Is Student: ${obj.isStudent}`);

if (obj.age !== undefined) {
  obj.age = 31; // Valid assignment
  console.log(`Updated Age: ${obj.age}`);
}
console.log("All operations completed successfully.");
