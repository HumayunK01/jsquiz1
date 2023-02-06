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
var no1;
var no2;
var result;
var operator;
no1 = prompt("Enter First Number: ");
no2 = prompt("Enter Second Number: ");
operator = prompt("Enter operator(+, -, *, /): ");
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
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

console.log("Q5 END =====================");
