// objects
const obj = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

const execute = () => {
  console.log("Executing function...");
  if (obj.isStudent === false) {
    obj.isStudent = true;

    console.log(obj);
  }
};

console.log(obj);
execute();
