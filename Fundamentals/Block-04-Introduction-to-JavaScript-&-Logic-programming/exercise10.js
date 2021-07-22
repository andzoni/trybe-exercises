/* Write a program that starts with two values on two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value minus the cost of the product) the company will have when selling a thousand of these products.
Note that the cost of the product is subject to a 20% tax.
Your program should also issue an error message and terminate if any of its input values are less than zero.
The profit of a product is the result of subtracting the sales value from the cost of the product, with the 20% tax also being part of the cost value.
valueCostTotal = valueCost + taxOnCost
profit = valueSale - valueTotalCost (profit of a product) */

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, values cannot be negative");
};