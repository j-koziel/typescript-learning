// Utility Types are types which help with common type manipulation

// Partial
// This type sets all the properties in an object to be optional
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // This makes all the properties optional
pointPart.x = 10;

// Required
// Makes all properties in an objext to be required
interface Car {
  make: string;
  model: string;
  mileage?: number; // Here mileage is set to optional
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // This forces mileage to be defined
};

// Record
// This is a shortcut to defining an object type with specific key types and value types
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

// Omit
// Removes keys from an object type
interface PersonOmit {
  name: string;
  age: number;
  location?: string;
}

const bobOmit: Omit<PersonOmit, "age" | "location"> = {
  name: "bob",
  // Here age and location have been removed
};

// Pick
// Keeps the specified key from the object type and removes everything else
interface PersonPick {
  name: string;
  age: number;
  location?: string;
}

const bobPick: Pick<PersonPick, "name"> = {
  name: "Bob",
  // Here name has been kept and all other keys have been removed
};

// Exclude
// This one removes types from a union
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // Exclude has removed the type string

// ReturnType
// Extracts the return type of a function type
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

console.log(point);

// Parameters
// Exracts the parameter types of a function type as an array
type PointPrinter = (p: { x: number; y: number }) => void;
const pointParam: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20,
};
console.log(pointParam);
