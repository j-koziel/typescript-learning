// There is a specific syntax for specifying the type of function parameters and return values
// Here the type of the return value is defined as number
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());

// If no type is defined, TypeScript will try to infer it by determining the type of the returned value

// Here the type of the return value is "void"
// This means the function returns no value
function printHello(): void {
  console.log("Hello!");
}

// Parameters can also be typed; similarly to how variables are typed
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(1, 2));
// If no type for the parameters is defined "any" is the default unless additional information is provided as shown below in Defualt Parameters and Type Alias

// Optional Parameters
// Default behaviour is that all parameters are required, but can be marked as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log("This is the add function: ", add(1, 2, 3));

// Default Parameters
// Defualt value comes after the type annotation
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
console.log("This is the pow function: ", pow(2, 2));

// Named Parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
console.log(
  "This is the divide function: ",
  divide({ dividend: 12, divisor: 4 })
);

// Rest Parameters
// Type must be an array as rest params are always arrays
function addRest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log("This is the add rest function: ", addRest(1, 2, 1, 2, 3, 4, 5));

// Type Alias
// Function types are specified separately from functions
type Negate = (value: number) => number;

const negateFunction: Negate = value => value * -1;
negateFunction(50);
