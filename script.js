// Question No 1:
console.log("Question 1:");
var str1 = "Today is";
var str2 = "a beautiful day";
var str3 = "In Hawaii.";
result = str1 + " " + str2 + " " + str3;
console.log(result);

// Question No 2:
console.log("Question 2:");
var char = "c";
switch (true) {
  case char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U":
    console.log("Its vowel");
    break;
  case (char >= "a" && char <= "z") || (char >= "A" && char <= "Z"):
    console.log("Its consonant");
    break;
  default:
    console.log("Enter Valid Data");
    break;
}

// Question No 3:
console.log("Question 3:");
var no1 = 45;
var no2 = 67;
var operator = "*";
var result;
console.log("First Number: " + no1);
console.log("Second Number: " + no2);
switch (operator) {
  case "+":
    result = no1 + no2;
    console.log(result);
    break;
  case "-":
    result = no1 - no2;
    console.log(result);
    break;
  case "*":
    result = no1 * no2;
    console.log(result);
    break;
  case "/":
    result = no1 / no2;
    console.log(result);
    break;
  default:
    console.log("Invalid operator");
    break;
}

// Question 4:
console.log("Question 4:");
var x = 5,
  y = 4,
  z = 5;
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
if (x == y && y == z) console.log("Equilateral Triangle");
else if (x == y || y == z || z == x) console.log("Isosceles Triangle");
else console.log("Scalene Triangle");

// Question 5:
console.log("Question 5:");
var unit = 130;
var total = 0;

if (unit > 250) {
  total = (unit - 250) * 1.5 + 100 * 1.2 + 100 * 0.75 + 50 * 0.5;
  total = total + total * 0.2;
} else if (unit > 150) {
  total = unit - 150 * 1.2 + 100 * 0.75 + 50 * 0.5;
} else if (unit > 50) {
  total = unit - 50 * 0.75 + 50 * 0.5;
} else {
  total = unit * 0.5;
}

console.log("Result = INR " + total);
