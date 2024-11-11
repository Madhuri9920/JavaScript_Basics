
// Loops can execute a block of code a number of times.

const cars = ["BMW", "Benz", "Audi", "Ford"];

let i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;