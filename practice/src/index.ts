// chapter 5-6 class declaration
type User = {
  name: string;
  age: number;
};

const createUser = (name: string, age: number): User => {
  if (name === "") {
    throw new Error("Name cannot be empty");
  }
  return {
    name,
    age,
  };
};

const getMessage = (user: User, message: string): string => {
  return `${user.name} (${user.age}) / says: ${message}`;
};

const uhyo = createUser("uhyo", 26);
console.log(getMessage(uhyo, "Hello, world!"));

/*
class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("Name cannot be empty");
    }
    this.name = name;
    this.#age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.#age}) / says: ${message}`;
  }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.getMessage("Hello, world!"));
*/

/* template
type User = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User {
  if (name === "") {
    throw new Error("Name cannot be empty");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: User, message: string): string {
  return `${user.name} says: ${message}`;
}

const uhyo = createUser("uhyo", 26);
console.log(getMessage(uhyo, "Hello, world!"));
*/
