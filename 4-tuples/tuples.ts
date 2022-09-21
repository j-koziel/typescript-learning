// Tuples are typed arrays where each index of the array is a known value.
let ourTuple: [number, boolean, string];

ourTuple = [5, false, "Coding God was here"];
console.log(ourTuple);

// When the types of the values are different from what they were defined to be tsc will throw an error.

// Readonly Tuples
// This is a good practice as the array will not be changed
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
ourReadonlyTuple.push("Coding God took a day off"); // This will throw an error

// Named Tuples
// Allow us to provide context for our values
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring Tuples
// Works just like normal JavaScript destructuring as Tuples are just arrays.

const graphDestructuring: [number, number] = [55.2, 41.3];
const [x1, y2] = graphDestructuring;
