// chapter 6-2 literal types

function getHelloStr(): "Hello, ${string}!" {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, World!";
  } else if (rand < 0.6) {
    return "Hello, TypeScript!";
  } else {
    return "Hello, Developer!";
  }
}

const helloStr = getHelloStr();
console.log(helloStr); // Possible outputs: "Hello, World!", "Hello, TypeScript!", "Hello, Developer!"

// literal type union
function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus")); // Output: 1
console.log(signNumber("minus")); // Output: -1
