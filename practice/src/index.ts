// chapter 4-3

type HasName = {
  name: string;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

const showStatus = (obj: HasName): void => {
  console.log(`Name: ${obj.name}`);

  if ("age" in obj) {
    console.log(`Age: ${obj.age}`);
  }
};

const g = (obj: HasNameAndAge): void => {
  showStatus(obj);
};

g({
  name: "Alice",
  age: 30,
});
