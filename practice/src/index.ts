// chapter 6-3 control flow analysis
type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type Robot = {
  tag: "robot";
  name: number;
};

type User = Animal | Human | Robot;

function getUserTag(user: User): string {
  if (user.tag === "animal") {
    return `This is an animal of species: ${user.species}`;
  } else if (user.tag === "human") {
    return `This is a human named: ${user.name}`;
  } else {
    return `This is a robot with ID: ${user.name}`;
  }
}

function getUserTag2(user: User): string {
  switch (user.tag) {
    case "animal":
      return `This is an animal of species: ${user.species}`;
    case "human":
      return `This is a human named: ${user.name}`;
    case "robot":
      return `This is a robot with ID: ${user.name}`;
  }
}

console.log(getUserTag({ tag: "animal", species: "Cat" }));
console.log(getUserTag({ tag: "human", name: "Alice" }));
console.log(getUserTag({ tag: "robot", name: 101 }));

console.log(getUserTag2({ tag: "animal", species: "Dog" }));
console.log(getUserTag2({ tag: "human", name: "Bob" }));
console.log(getUserTag2({ tag: "robot", name: 202 }));
/*
function formatNumberOrString(value: number | string) {
  if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(3.14159)); // "3.14"
console.log(formatNumberOrString("Hello")); // "Hello"
*/

/* 
type SignType = "plus" | "minus";
function signNumber(type: SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return num;
  } else {
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, "plus")); // 5
console.log(numberWithSign(5, "minus")); // -5
console.log(numberWithSign(5, "none")); // 5
*/
