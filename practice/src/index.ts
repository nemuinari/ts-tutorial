// chapter 3-6 Destructuring Assignment

const nested = {
  num: 123,
  obj: {
    foo: "hello",
    bar: "world",
  },
};

const {
  num,
  obj: { foo, bar },
} = nested;

console.log(num); // 123
console.log(foo + ", " + bar); // hello world

const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const tuple: [string, number] = ["Kyoko", 25];
const [myName, age] = tuple;

console.log(myName);
console.log(age);

const arr2 = [10, 20, 30, 40, 50];
const [first, , third, ...rest] = arr2;

console.log(first); // 10
console.log(third); // 30
console.log(rest); // [40, 50]
