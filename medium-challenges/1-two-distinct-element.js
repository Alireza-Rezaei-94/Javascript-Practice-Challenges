// In each input array, every number repeats at least once,
//  except for two. Write a function that returns the two unique numbers.

function returnUnique(arr) {
  let finalList = [];
  let isRepeated = [];
  arr.forEach((element) => {
    if (finalList.includes(element) === false) {
      finalList.push(element);
    } else {
      if (isRepeated.includes(element) === false) {
        isRepeated.push(element);
      }
    }
    // console.log(finalList);
    // console.log(isRepeated);
  });
  let copyOffinlalList = [];
  finalList.forEach((element) => {
    // console.log(isRepeated.includes(element), "NowElement", element);
    // console.log("finalInForeach", finalList);
    if (isRepeated.includes(element)) {
      //   console.log("indexOF", finalList.indexOf(element));
      finalList.splice(finalList.indexOf(element), 1, 0);
    }
    // console.log("FirstFinal", finalList);
  });
  finalList.forEach((element) => {
    if (element !== 0) {
      copyOffinlalList.push(element);
    }
  });
  console.log("------------");
  //   console.log("finalList", finalList);
  console.log("copyOffinlalList", copyOffinlalList);
  console.log("isRepeated", isRepeated);
}

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6, 6])➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) 
// ➞ [5, 6]
// Notes
// Keep the same ordering in the output.
