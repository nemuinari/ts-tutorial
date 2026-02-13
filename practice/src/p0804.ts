// chapter 8
import { readFile } from "fs/promises";

export function execute() {
  const p = readFile("foo.txt", "utf-8");

  p.then(
    (data) => {
      console.log(data);
    },
    (error: unknown) => {
      console.log("Error", error);
    },
  );
}
