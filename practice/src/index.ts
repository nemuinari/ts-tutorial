// chapter 6ex
// tag set unions Option and Either

type Some<T> = {
  tag: "some";
  value: T;
};
type None = {
  tag: "none";
};
type Option<T> = Some<T> | None;

function printOption(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(`Value: ${obj.value}`);
  } else {
    console.log("No value");
  }
}

function isSome<T>(obj: Option<T>): obj is Some<T> {
  return obj.tag === "some";
}

const four: Option<number> = {
  tag: "some",
  value: 100,
};
const nothing: Option<number> = {
  tag: "none",
};

printOption(four); // Output: Value: 100
printOption(nothing); // Output: No value
