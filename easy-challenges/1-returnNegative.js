// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

// Examples
// returnNegative(4) ➞ -4

// returnNegative(15) ➞ -15

// returnNegative(-4) ➞ -4

// returnNegative(0) ➞ 0
function negetiveNumber(params) {
  negetiveNum = -params * 2 + params;
  return negetiveNum;
}

console.log(negetiveNumber(5));
