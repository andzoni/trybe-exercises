/* Write a program that takes the name of a chess piece and returns the moves it makes.
As a challenge, make the program work both if you receive the name of a part in capital letters or in small letters, without increasing the amount of conditionals.
As a tip, you can search for a function that makes a string all lowercase (lower case) .
If the part passed is invalid, the program should return an error message.
Example: bishop (bishop) -> diagonals (diagonals) */

let chessPiece = 'bishop';

switch (chessPiece.toLowerCase()) {
   case 'king':
     console.log('King-> One house just for any direction.');
     break;
   case 'bishop':
     console.log('Bishop-> Diagonal.');
     break;
   case 'queen':
     console.log('Queen-> Diagonal, horizontal and vertical.');
     break;
   case 'horse':
     console.log('Horse -> "L" can jump over pieces.');
     break;
   case 'tower':
     console.log('Tower -> Horizontal and Vertical.');
     break;
   case 'pawn':
     console.log("Pawn -> Only one square forward, first move can be two squares.");
     break;
   default:
     console.log('Error, invalid piece!');
     break;
};