// specific syntax for typing arrays
const names: string[] = []; // assign the type of values which should be in the array.

names.push("Jonathan");
console.log(names);

// readonly keyword prevents arrays from being changed
const namesReadOnly: readonly string[] = ["Jonathan"];
names.push("Jack"); // This will not work

console.log(namesReadOnly);

// Type can also be inferred from the values in the array
const numbers = [1, 2, 3]; // Type will be number[] here

numbers.push("2"); // This will throw an error
