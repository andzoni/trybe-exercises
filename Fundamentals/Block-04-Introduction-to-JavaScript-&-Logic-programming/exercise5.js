/* Write a program that defines three variables with the values of the three inner angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise. If any angle is invalid the program should return an error message. 
For the angles to be of a valid triangle, the sum of the three must be 180 degrees.
An angle will be considered invalid if it does not have a positive value.*/

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Error: invalid angle');
}