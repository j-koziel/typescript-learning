// Type Aliases
// Define types with a custom name
// Can be used for primitives like string or more complex types like objects and arrays
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);

// Interfaces
// Similar to aliases but they ✨ only ✨ apply to object types
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// Extending Interfaces
// Creating a new interface with features from a previous one and something new
// Use the Rectangle example from before
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
console.log(coloredRectangle);
