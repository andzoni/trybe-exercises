/* Make a program that returns the largest of three numbers. At the beginning of the program, define three variables with the values to be compared. */

let a = 6;
let b = 4;
let c = 2;

if (a > b && a > c) {
  console.log('The largest number is: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('The largest number is: ' + b + ' (b)');
} else {
  console.log('The largest number is: ' + c + ' (c)');
};