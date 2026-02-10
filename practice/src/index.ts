// chapter 6-4 keyof and lookup types
type Human = {
  type: "human";
  name: string;
  age: number;
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26,
};

const uhyo2 = setAge(uhyo, 30);
console.log(uhyo2);

function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setAge2<T extends { age: number }>(obj: T, age: T["age"]): T {
  return {
    ...obj,
    age,
  };
}

const uhyoNmme = get(uhyo, "name");
const uhyoAge = get(uhyo, "age");

console.log(uhyoNmme);
console.log(uhyoAge);

const uhyo3 = setAge2(uhyo, 35);
const uhyoAge2 = get(uhyo3, "age");

console.log(uhyoAge2);
