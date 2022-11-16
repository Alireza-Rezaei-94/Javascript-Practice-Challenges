// I have a bucket containing an amount of navy blue paint and I'd like to paint as
//  many walls as possible. Create a function that returns the number of complete walls
//  that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.
// Examples
function howManyWalls(n, w, h) {
  Area = h * w;
  wallCoverd = Math.floor(n / Area);
  console.log(wallCoverd);
}
howManyWalls(100, 4, 5);
// ➞ 5

howManyWalls(10, 15, 12);
//  ➞ 0
howManyWalls(41, 3, 6);
// ➞ 2
// Notes
// Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
// All walls will have the same dimensions.
// All numbers will be positive integers.


































// function howManyWalls(numberofSqureMeter,width,height){

//     //  if(numberofSqureMeter < width*height){
//     //     return 0;
//     //  }
//     const paintedWals = numberofSqureMeter / (width * height);
//     return Math.floor( paintedWals);
// }

// console.log(howManyWalls(12,15,10));
