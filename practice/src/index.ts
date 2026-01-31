// chapter 4-2

/* generic function */
function firstElement<T>(array: T[]): T | undefined {
  return array[0];
}

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const firstUser = firstElement(users);

if (firstUser) {
  console.log(`Name: ${firstUser.name}, Age: ${firstUser.age}`);
} else {
  console.log("No users found.");
}
