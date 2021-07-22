/* Write a program that converts a percentage grade (from 0 to 100) into A to F grades. Follow these rules:
Percentage >= 90 -> A
Percentage >= 80 -> B
Percentage >= 70 -> C
Percentage >= 60 -> D
Percentage >= 50 -> E
Percentage < 50 -> F
The program should return an error message and terminate if the passed grade is less than 0 or greater than 100. */

let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Error, incorrect grade!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}