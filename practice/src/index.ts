import { createInterface } from "readline";

// primitive types
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (line: string) => {
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});
