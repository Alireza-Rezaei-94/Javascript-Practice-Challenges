// Given a two-dimensional array of maze and an array of directions. Your task is to follow the given directions.

// If you can reach the endpoint before all your moves have gone, return "Finish".
// If you hit any walls or go outside the maze border, return "Dead".
// If you find yourself still in the maze after using all the moves, return "Lost".
// The maze array will look like this:

maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1],
];

//  0 = Safe place to walk
//  1 = Wall
//  2 = Start Point
//  3 = Finish Point
//  N = North, E = East, W = West and S = South
// See the below examples for a better understanding:

// console.log(maze.length);
function findStartposition(maze) {
  var findPosition = false;
  if (findPosition === false) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 2) {
          findPosition = true;
          return [i, j];
        }
      }
    }
  }
}
function findEndposition(maze) {
  var findPosition = false;
  if (findPosition == false) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 3) {
          findPosition = true;
          return [i, j];
        }
      }
    }
  }
}

// console.log(findStartposition(maze));
function exitMaze(maze, arr) {
  const startPositon = findStartposition(maze);
  const endPoint = findEndposition(maze);
  //   console.log(startPositon);
  //   console.log(endPoint);
  let currentPosition = [startPositon[0], startPositon[1]];
  let situation = "";
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === "N" && currentPosition[0] > 0) {
      currentPosition[0] -= 1;

      if (maze[currentPosition[0]][currentPosition[1]] === 1) {
        situation = "Dead";
      }
    }
    if (arr[x] === "S" && currentPosition[0] < 9) {
      currentPosition[0] += 1;

      if (maze[currentPosition[0]][currentPosition[1]] === 1) {
        situation = "Dead";
      }
    }
    if (arr[x] === "W" && currentPosition[1] > 0) {
      currentPosition[1] -= 1;

      if (maze[currentPosition[0]][currentPosition[1]] == 1) {
        situation = "Dead";
      }
    }
    if (arr[x] === "E" && currentPosition[1] < 9) {
      currentPosition[1] += 1;

      if (maze[currentPosition[0]][currentPosition[1]] === 1) {
        situation = "Dead";
      }
    }
  }
  //   console.log("after for:", situation);
  if (situation != "Dead") {
    if (
      currentPosition[0] === endPoint[0] &&
      currentPosition[1] &&
      endPoint[1]
    ) {
      situation = "Finish";
    } else {
      situation = "Lost";
    }
  }

  //   console.log("startPositon", startPositon);
  //   console.log("endPoint", endPoint);
  //   console.log(
  //     "currentPosition",
  //     currentPosition,
  //     "lastplace ",
  //     maze[currentPosition[0]][currentPosition[1]]
  //   );
  console.log(situation);
}

// Examples
exitMaze(maze, ["N", "E", "E"]);
// ➞ "Dead"
//  Hitting the wall should return "Dead".

exitMaze(maze, ["N", "N", "N", "E"]);
// ➞ "Lost"
// Couldn't reach the finish point.

exitMaze(maze, [
  "N",
  "W",
  "W",
  "W",
  "N",
  "N",
  "N",
  "N",
  "W",
  "W",
  "S",
  "S",
  "S",
  "S",
  "W",
  "W",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
]);
// ➞ "Finish"
// Notes
// N/A
