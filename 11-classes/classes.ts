// Adds types and visibility modifiers to JS classes
// The members of a class are typed with type annotations
// All very similar to how variables are typed
class Person {
  name: string; // Defining the type of the name property as string
}

const person = new Person();
person.name = "Jane";

/* Class members can be given special modifiers to determine their visibility
 * public - allows access to the member from anywhere
 * private - only allows access to the class member from within the class
 * protected - allows access to the class member from itself and any classes which inherit it
 */

class PersonVisibility {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new PersonVisibility("Jane");
console.log(person1.getName()); // This won't work as the name is not accessible from outside the class

// Parameter Properties
// Visibility modifiers are added to the parameters
class PersonParamProp {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new PersonParamProp("Jane");
console.log(person2.getName());

// Readonly prevents class members from being changed
class PersonReadOnly {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
    // After this initial definition (at the declaration or in the constructor) the name cannot be changed
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new PersonReadOnly("Jane");
console.log(person3.getName());

// Inheritance: Implements
// Interfaces can be used to define the type structure a class must follow
// This is done through the implements keyword.
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// Multiple interfaces can be used by listing them with commas

// Inheritance: Extends
// Classes can extend to each other with the extends keyword. A class can only extend to one other class

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}
