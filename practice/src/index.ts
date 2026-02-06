// chapter 5-4 class declaration
try {
  console.log("before error");
  throwError();
  console.log("after error");
} finally {
  console.log("finally");
}

function throwError() {
  throw new Error("This is an error");
}
