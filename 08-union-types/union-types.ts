// Union Types are used when a value can be more than one type
// So a value can be either a string or a number

function printStatusCode(code: string | number) {
  // Here the type of the argument is defined with a union type
  console.log(`My status code is ${code}`);
}

printStatusCode(404);
printStatusCode("404"); // Both number and string will work

// To avoid type errors you should what the types are going to be when using union types
