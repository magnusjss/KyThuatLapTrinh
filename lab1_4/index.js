/* Bài 1 */
var num = Number(prompt("Enter number: "));
console.log("Tất cả các ước số của số nguyên dương n là: ");
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}

/* Bài 2 */
var num = Number(prompt("Enter number: "));
var isPrimeNumber = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

var printPrimeNumber = () => {
  for (let i = 0; i <= num; i++) {
    if (isPrimeNumber(i)) {
      console.log(i);
    }
  }
};
console.log("Tất cả các số nguyên tố nhỏ hơn n là: ");
printPrimeNumber();

/* Bài 3 */
var num = Number(prompt("Enter number: "));
var sumOfNumbers = (num) => {
  var sum = 0;
  for (let i = 0; i <= num; i += 2) {
    if (num % i == 0) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
  }
  console.log(sum);
};
console.log("Tổng của tất cả ước số chẵn của số nguyên dương n là: ");
sumOfNumbers(num);

/* Bài 4 */

var num = Number(prompt("Enter number: "));
var amount = (n) => {
  var count = 0;
  for (let i = 0; i <= n; i += 2) {
    if (n % i == 0) {
      if (i % 2 == 0) {
        count++;
      }
    }
  }
  console.log(count);
};
console.log("Số lượng của tất cả ước số chẵn của số nguyên dương n là: ");

amount(num);

/* Bài 5 */
function input() {
  var input = prompt("Enter a string: ");
  console.log(input);
}
function output() {
  input();
}
console.log("Chuỗi được in ra: ");
output();

/* Bài 6 */
var number = Number(prompt("Enter number: "));
var checkEven = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
var checkOld = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
console.log("Số chẵn: ");
checkEven(number);
console.log("Số lẻ: ");
checkOld(number);

/* Bài 7 */
var number = Number(prompt("Enter number: "));
var isOld = (Number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  console.log(sum);
};
console.log("Tổng các số lẻ là: ");
isOld(number);
