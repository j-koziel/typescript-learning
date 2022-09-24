// Generics allow creating "type variables"
// It's like when passing in arguments into a function call
// However instead of passing in arguments you are passing in the type that you want the value to be.

// Functions
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>("hello", 42));

// Classes
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
let value = new NamedValue<number>("myNumber");
value.setValue(10);
console.log(value.toString());

// Type Aliases
// This allows you to create more reusable types
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// Defualt value
// Default values can be defined with the following syntax
// <T = string>
