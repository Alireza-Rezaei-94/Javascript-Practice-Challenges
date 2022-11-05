// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
  let sumOfLegs = 2 * chickens + 4 * cows + 4 * pigs;
  console.log(sumOfLegs);
}
// Examples
animals(2, 3, 5);
// ➞ 36

animals(1, 2, 3);
// ➞ 22

animals(5, 2, 8);
// ➞ 50
// animals(chickens, cows, pigs).
