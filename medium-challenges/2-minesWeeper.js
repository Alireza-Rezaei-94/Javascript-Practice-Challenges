// This challenge is based on the game Minesweeper.

// Create a function that takes a grid of # and -, where each hash (#)
// represents a mine and each dash (-) represents a mine-free spot.
// Return an array where each dash is replaced by a digit indicating the number
//  of mines immediately adjacent to the spot (horizontally, vertically, and diagonally).

function numGrid(array) {
  var myGrid = [...Array(5)].map((e) => Array(5));
  var myGrid = [...Array(6)].map((e) => Array(6).fill(0));
  for (let i = 0; i < 5; i++) {
    // console.log("i", i);
    for (let j = 0; j < 5; j++) {
      //   console.log(array[i][j]);
      //   console.log("j", j);
      //   console.log("index", array.indexOf(array[i][j]));
      if (array[i][j] === "#") {
        if (
          i - 1 >= 0 &&
          j - 1 >= 0 &&
          i - 1 <= 4 &&
          j - 1 <= 4 &&
          array[i - 1][j - 1] !== "#"
        ) {
          if (array[i - 1][j - 1] !== "-") {
            array[i - 1][j - 1] = String(Number(array[i - 1][j - 1]) + 1);
          } else {
            array[i - 1][j - 1] = "1";
          }
        }
        if (
          i - 1 >= 0 &&
          j >= 0 &&
          i - 1 <= 4 &&
          j <= 4 &&
          array[i - 1][j] !== "#"
        ) {
          if (array[i - 1][j] !== "-") {
            array[i - 1][j] = String(Number(array[i - 1][j]) + 1);
          } else {
            array[i - 1][j] = "1";
          }
        }
        if (
          i - 1 >= 0 &&
          j + 1 >= 0 &&
          i - 1 <= 4 &&
          j + 1 <= 4 &&
          array[i - 1][j + 1] !== "#"
        ) {
          if (array[i - 1][j + 1] !== "-") {
            array[i - 1][j + 1] = String(Number(array[i - 1][j + 1]) + 1);
          } else {
            array[i - 1][j + 1] = "1";
          }
        }

        if (
          i >= 0 &&
          j - 1 >= 0 &&
          i <= 4 &&
          j - 1 <= 4 &&
          array[i][j - 1] !== "#"
        ) {
          if (array[i][j - 1] !== "-") {
            array[i][j - 1] = String(Number(array[i][j - 1]) + 1);
          } else {
            array[i][j - 1] = "1";
          }
        }

        if (
          i >= 0 &&
          j + 1 >= 0 &&
          i <= 4 &&
          j + 1 <= 4 &&
          array[i][j + 1] !== "#"
        ) {
          if (array[i][j + 1] !== "-") {
            array[i][j + 1] = String(Number(array[i][j + 1]) + 1);
          } else {
            array[i][j + 1] = "1";
          }
        }

        if (
          i + 1 >= 0 &&
          j - 1 >= 0 &&
          i + 1 <= 4 &&
          j - 1 <= 4 &&
          array[i + 1][j - 1] !== "#"
        ) {
          if (array[i + 1][j - 1] !== "-") {
            array[i + 1][j - 1] = String(Number(array[i + 1][j - 1]) + 1);
          } else {
            array[i + 1][j - 1] = "1";
          }
        }
        if (
          i + 1 >= 0 &&
          j >= 0 &&
          i + 1 <= 4 &&
          j <= 4 &&
          array[i + 1][j] !== "#"
        ) {
          if (array[i + 1][j] !== "-") {
            array[i + 1][j] = String(Number(array[i + 1][j]) + 1);
          } else {
            array[i + 1][j] = "1";
          }
        }
        if (
          i + 1 >= 0 &&
          j + 1 >= 0 &&
          i + 1 <= 4 &&
          j + 1 <= 4 &&
          array[i + 1][j + 1] !== "#"
        ) {
          if (array[i + 1][j + 1] !== "-") {
            array[i + 1][j + 1] = String(Number(array[i + 1][j + 1]) + 1);
          } else {
            array[i + 1][j + 1] = "1";
          }
        }
        // console.log("update array for the ", i, array);
      }
    }
    //   }
    //   copyOfArray = array;

    //   console.log("copy", copyOfArray);
    // console.log("original", array);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (array[i][j] == "-") {
        array[i][j] = "0";
        // console.log("change innerElement: ", array[i][j]);
      }
    }
  }
  console.log(array);
}

// Examples
// numGrid([
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"],
// ]);➞ [
//   ["0", "0", "0", "0", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "1", "#", "1", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "0", "0", "0", "0"],
// ]

// numGrid([
//   ["-", "-", "-", "-", "#"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["#", "-", "-", "-", "-"],
// ]);➞ [
//   ["0", "0", "0", "1", "#"],
//   ["0", "1", "1", "2", "1"],
//   ["0", "1", "#", "1", "0"],
//   ["1", "2", "1", "1", "0"],
//   ["#", "1", "0", "0", "0"]
// ]

// numGrid([
//   ["-", "-", "-", "#", "#"],
//   ["-", "#", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "#", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"]
// ])
// ➞ [
//   ["1", "1", "2", "#", "#"],
//   ["1", "#", "3", "3", "2"],
//   ["2", "4", "#", "2", "0"],
//   ["1", "#", "#", "2", "0"],
//   ["1", "2", "2", "1", "0"],
// ]
// Notes
// N/A
