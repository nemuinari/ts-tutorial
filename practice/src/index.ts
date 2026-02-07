// chapter 6-1 type union and intersection
type Human = {
  name: string;
  age: number | undefined;
};
type Animal = {
  species: string;
};

function getName(human: Human) {
  return human.name;
}
function getAge(human: Human) {
  return human.age;
}
function getSpecies(animal: Animal) {
  return animal.species;
}
function mergeUser(user: Human & Animal): string {
  return `${user.name} (${user.species}) is ${user.age ?? "unknown"} years old.`;
}

// const mysteryFunc = Math.random() > 0.5 ? getName : getSpecies;

const uhyo: Human & Animal = {
  name: "uhyo",
  age: 29, // undefined,
  species: "homo sapiens",
};

// const value = mysteryFunc(uhyo);
const value = mergeUser(uhyo);
console.log(value);
