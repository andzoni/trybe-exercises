/* A person who works with a formal contract in Brazil has the INSS and the IR deducted from their gross salary. Make a program that, given a gross salary, calculates the net to be received.
The notation for a salary of $1500.10, for example, should be 1500.10. For tax ranges, use the following references:
INSS (National Social Security Institute)
Gross salary up to R$ 1,556.94: 8% rate
Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
Gross salary from BRL 2,594.93 to BRL 5,189.82: 11% rate
Gross salary above R$ 5,189.82: maximum rate of R$ 570.88
IR (Income Tax)
Up to R$1,903.98: exempt from income tax
From BRL 1,903.99 to 2,826.65: rate of 7.5% and installment of BRL 142.80 to be deducted from the tax
From BRL 2,826.66 to BRL 3,751.05: 15% rate and portion of BRL 354.80 to be deducted from the tax
From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from the tax
Above R$ 4,664.68: 27.5% rate and a portion of R$ 869.36 to be deducted from the tax. */

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salary: " + (baseSalary - aliquotIR));