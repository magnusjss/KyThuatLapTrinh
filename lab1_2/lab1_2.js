// //Bài 1
// var n = prompt("Enter integer n: ");
// console.log("|n| = " + Math.abs(n));

// //Bài 2
// let a = Number(prompt("Enter a: "));
// let b = Number(prompt("Enter b: "));

// console.log("Sum is: " + (a + b));

// //Bài 3
// let math = Number(prompt("Enter math grade: "));
// let physics = Number(prompt("Enter physics grade: "));
// let chemistry = Number(prompt("Enter chemistry grade: "));
// let sum = Number(math + physics + chemistry);
// let average = sum / 3;
// console.log("Sum of grades = " + sum);
// console.log("Average grade = " + average);

// //Bài 4
// let r = Number(prompt("Enter radius: "));
// let perimeter = 2 * Math.PI * r;
// let area = Math.PI * r ** 2;
// console.log("Perimeter = ", perimeter);
// console.log("Area = ", area);

// //Bài 5
// const TAX = 0.08;
// do {
//   var phonePrice = Number(prompt("Enter phone price: "));
//   var charger = Number(prompt("Enter charger price: "));
//   var sale = Number(prompt("Enter sale price: "));
// } while (confirm("Are you sure entered the right price?") == false);

// var tax = phonePrice + charger * TAX;
// var total = phonePrice + charger + tax - sale;

// alert("Total price = " + total);
// console.log("Total price = " + total);

//add code

//Bài 6

var choice = Number(prompt("Enter a number"));
var names = new Array(choice);
for (var i = 0; i < names.length; i++) names[i] = prompt("Enter name: ");

for (var i = 0; i < names.length; i++) {
  names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
  console.log(names[i]);
}
//test for git
