

// Equal to (==): Checks if two values are equal, but without considering data type.
// Strict Equal to (===): Checks if two values are equal and of the same type
// Not equal to (!=): Checks if two values are not equal, but without considering data type.
// Strict Not Equal to (!==): Checks if two values are not equal or of different types.
// Greater than (>): Checks if the left value is greater than the right value.
// Less than (<): Checks if the left value is less than the right value.
// Greater than or equal to (>=): Checks if the left value is greater than or equal to the right value.
// Less than or equal to (<=): Checks if the left value is less than or equal to the right value.

let a = 10;
let b = 20;

console.log(a > b);   // false (10 is not greater than 20)
console.log(a === 10); // true (10 is strictly equal to 10)
console.log(a != b);   // true (10 is not equal to 20)