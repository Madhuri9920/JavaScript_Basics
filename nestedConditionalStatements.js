
// A nested conditional statement in JavaScript is when you place one 
// if, else if, or else statement inside another. 
// This is useful when you need to check multiple conditions in a sequence or hierarchy.

// Basic Concept:
// Outer condition: The first condition you check.
// Inner condition: A second condition that is checked only if the outer condition is true or false.

let age = 20;

if (age >= 18) {
  if (age >= 21) {
    console.log("You can drink alcohol.");
  } else {
    console.log("You are an adult, but you cannot drink alcohol yet.");
  }
} else {
  console.log("You are not an adult.");
}