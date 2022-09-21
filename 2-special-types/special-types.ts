// The "any" type

let v: any = true;
v = "string";

console.log(Math.round(v));
// This type disables type checking completely so reassigning to different types will not throw errors.

// The "unkown" type
// It is similar to "any" but it is actually safer as typescript will prevent unkown types from being used

// The "never" type
// This type throws an error whenever it is assigned

let x: never = true; // Type 'boolean' is not assignable to type 'never'.

// The "undefined" and "null" types
// Types which refer to the JavaScript primitves.
// Do not have much use unless strictNullChecks is enabled in the config file
