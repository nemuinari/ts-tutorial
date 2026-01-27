// chapter 3.5: arrays

const arr_int: number[] = [1, 2, 3];
const arr_str: string[] = ["a", "b", "c"];
const arr_bool: boolean[] = [true, false, true];

arr_int.push(4);
arr_str.push("d");
arr_bool.push(false);

console.log("arr_int is length: ", arr_int.length); // 4
console.log("arr_str is length: ", arr_str.length); // 4
console.log("arr_bool is length: ", arr_bool.length); // 4

const arr_read_int: readonly number[] = [5, 6, 7];

console.log("arr_read_int includes: ", arr_read_int.includes(6)); // true

for (const elm of arr_int) {
  console.log(elm); // 1 2 3 4
}
