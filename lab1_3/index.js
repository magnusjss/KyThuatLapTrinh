/* Bài 1 */
let numA = Number(prompt("Enter a number a: "));
let numB = Number(prompt("Enter a number b: "));
if (numA * numB >= 0)
  console.log("Number A & B the same sign\n", numA + ", " + numB);
else console.log("Number A & B the different sign\n", numA + ", " + numB);

/* Bài 2 */
var month;
do {
  month = Number(prompt("Enter a month: "));
  if (month > 12 || month < 1)
    console.log("Invalid month, must be between 1 and 12");
} while (month < 1 || month > 12);

switch (Number(month)) {
  case 1:
  case 2:
  case 3:
    console.log("Month " + Number(month) + " is: " + " the 1st quarter");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Month " + Number(month) + " is: " + " the 2nd quarter");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Month " + Number(month) + " is: " + " the 3rd quarter");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Month " + Number(month) + " is: " + " the 4th quarter");
    break;
}

/* Bài 3 */
var num;
var Sum = 0;
do {
  num = Number(prompt("Enter a number: "));
  if (num <= 0) console.log("Invalid number, must be greater than 0");
} while (num <= 0);
Sum = (num * (num + 1)) / 2;
console.log("Sum of 1 to " + num + " is: " + Sum);

/* Bài 4 */
var num;
var sum = 0;
do {
  num = Number(prompt("Enter a number: "));
  if (num <= 0) console.log("Invalid number, must be greater than 0");
} while (num <= 0);
for (let i = 2; i <= 2 * num; i++) {
  sum += 1 / i;
}
console.log("Sum of 1/2 to 1/" + num + " is: " + sum);

/* Bài 5 */
var num1, num2;
do {
  num1 = Number(prompt("Enter a number: "));
  num2 = Number(prompt("Enter a number: "));
} while (num1 <= 0 || num2 <= 0);
let result = exponential(num1, num2);
console.log("exponential between " + num1 + "^" + num2 + " is: " + result);

function exponential(num1, num2) {
  if (num2 == 0) return 1;
  else return num1 * exponential(num1, num2 - 1);
}
