import { createInterface } from "readline";

// chapter 2
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?: ", (name: string) => {
  const displayName = name || "Guest";
  console.log(`Hello, ${displayName}!`);
  rl.close();
});
