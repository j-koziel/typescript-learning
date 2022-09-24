// Casting is the process of overriding a type
// Sometimes incorrect types might be provided by a library

// Casting with as
// Will directly change the type of the given variable
let x4: unkown = "hello";
console.log((x as string).length);

// This doesn't change the type of data within the variable itself

// Casting with <>
// Works the same as casting with "as"
let x2: unkown = "hello";
console.log((<string>x).length);

// Force Casting
// This overrides type errors which may be thrown when casting
let x3 = "hello";
console.log((x as unknown as number).length);
