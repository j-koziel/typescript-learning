// Here you define the type of every key that you are going to define.
// You have to define all of them overwise typescript will throw an error.
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car);

// Type inference
// Typescript can infer the types based on the values of the properties

const carTypeInference = {
  type: "Toyota",
};

car.type = "Ford"; // No error thrown here
car.type = 2; // Error will be thrown

// Optional properties
// These are properties which do not have to be defined in the object itself.
const carOptionalProperties: { type: string; mileage?: number } = {
  type: "Toyota",
};

// Index Signatures
// This is used when the structure of the object is unkown.
// This allows you to define the type that the key will be and the type that the value will be.
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // No error
nameAgeMap.Mark = "Fifty"; // Error as the type of value is incorrect.
