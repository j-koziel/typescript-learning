// Explicitly defining the type of a variable.
// They are easier to read and are more intentional.
let firstName: string = "Jonathan";

// firstName = 33 attempt to reassign to a different type will fail.

// Implicitly defining the type. Just like javascript, typescript will guess the type of the variable based on the assigned value.
// On the other hand, javascript will allow you to reassign the variable to a different type, but typescript will still throw an error.
// This is also called "infer" in typescript.
// Often used when developing and testing applications.
let firstName1 = "Jonathan";

console.log(firstName, firstName1);

// Typescript may not always be able to infer the type so it will just set it to any.
// This disables type checking completely
