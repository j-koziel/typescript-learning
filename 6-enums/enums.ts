// Enum is a special class that represents a group of constants
// They come in two flavours: string and numeric

// Numeric Enums
// Default behaviour: first value is initialised to 0 and add 1 to each additional value

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection); // Will log 0

// Numeric Enums - Initialized
enum CardinalDirectionsInitial {
  North = 1, // Set the value of the first enum and it will increment from that value
  East,
  South,
  West,
}
console.log(CardinalDirectionsInitial.North);
console.log(CardinalDirectionsInitial.West);

// Numeric Enums - Fully Initialized
// Assign a unique number of values to each enum
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);

// String Enums
// More common the numeric enums due to readability and intent
enum CardinalDirectionsString {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
console.log(CardinalDirectionsString.North);
