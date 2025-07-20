function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const number = getFirstElement<number>([1, 2, 3]);
const string = getFirstElement<string>(["a", "b", "c"]);
const bool = getFirstElement<boolean>([true, false, true]);

console.log(number);
console.log(string);
console.log(bool);