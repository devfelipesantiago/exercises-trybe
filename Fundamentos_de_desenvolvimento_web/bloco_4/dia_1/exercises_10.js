//variaveis
let buyValue = 10;
let saleValue = -1;

//Profit
if (buyValue < 0 || saleValue < 0) {
  console.log("Error: Input a valid value.");
} else {
  let profit = 1000 * (saleValue - buyValue * 1.2);
  console.log(profit);
}
