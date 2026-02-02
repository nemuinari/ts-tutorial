// chapter 4-4

// callback function
/*
type Mapper = <T, U>(array: T[], callback: (element: T) => U) => U[];

const map: Mapper = (array, callback) => {
  const result = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
};
*/
function map<T, U>(array: T[], callback: (element: T) => U): U[] {
  const result: U[] = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

const data = [1, -2, 3, -4, 5];
const result: boolean[] = map(data, (x) => x >= 0);

console.log(result);

// FizzBuzz
/*
type FizzBuzz = "Fizz" | "Buzz" | "FizzBuzz" | number;

const getFizzBuzz = (element: number): FizzBuzz => {
  if (element % 3 === 0 && element % 5 === 0) {
    return "FizzBuzz";
  } else if (element % 3 === 0) {
    return "Fizz";
  } else if (element % 5 === 0) {
    return "Buzz";
  } else {
    return element;
  }
};

const sequence = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzz(i);
  console.log(message);
}
*/

// generic arrow function
/*
const repeat = <T>(element: T, lenght: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < lenght; i++) {
    result.push(element);
  }
  return result;
};

const result = repeat("Hello", 3);
console.log(result);
*/

// generic function
/*
const repeat = function <T>(element: T, lenght: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < lenght; i++) {
    result.push(element);
  }
  return result;
};
*/
