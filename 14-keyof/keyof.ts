// The keyword "keyof" is used to retrieve the key type from an object type

// "keyof" with explicit keys
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27,
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
