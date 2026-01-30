// chapter 4-1

/* Arrow Function and Map */
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = users.map((user: User): string => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

/* Arrow Function
type human = {
  height: number;
  weight: number;
};

const calcBMI = (human: human): number => {
  return human.weight / (human.height / 100) ** 2;
};

const uhyo: human = {
  height: 181,
  weight: 72,
};

console.log(calcBMI(uhyo)); // 21.97802197802198
+/

/*
type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / (human.height / 100) ** 2;
};

const uhyo: Human = {
  height: 181,
  weight: 72,
};

console.log(calcBMI(uhyo)); // 21.97802197802198
*/

/*
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
