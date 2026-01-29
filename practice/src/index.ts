// chapter 3-8

type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

// This is data in CSV
const data: string = `
uhyo,25,1
mike,30,0
alice,28,1
`;

// Object array is type User[]
const users: User[] = [];

// reading CSV data
const lines = data.split("\n");
for (const line of lines) {
  if (line === "") {
    continue;
  }

  const [name, ageStr, premiumUserStr] = line.split(",");
  users.push({
    name: name ?? "",
    age: Number(ageStr),
    premiumUser: premiumUserStr === "1",
  });
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}) is a premium user.`);
  } else {
    console.log(`${user.name} (${user.age}) isn't a premium user.`);
  }
}
