// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
function zeroesToEnd(arr) {
  let zerosCounter = 0;
  for (i = 0; i < arr.length; i++) {
    let isZero = arr[i] === 0;
    if (isZero) {
      zerosCounter++;
      arr.splice(i, 1);
      i--;
    }
  }
  for (j = 0; j < zerosCounter; j++) {
    arr.push(0);
  }
  return arr;
}
// Examples

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
// ➞ [1, 2, 4, 5, 0, 0, 0]
console.log(zeroesToEnd([0, 0, 2, 0, 5]));

// ➞ [2, 5, 0, 0, 0]
console.log(zeroesToEnd([4, 4, 5]));

// ➞ [4, 4, 5]
console.log(zeroesToEnd([0, 0]));

//  ➞ [0, 0]
// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.
