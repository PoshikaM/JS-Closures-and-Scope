// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

// Progression 2: add 3 variables: title, currIndex, check

// Progression 3: create a function "searchForElement"

// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
// to return the desired output.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
let NEG_INF = -1000000;

function createPop(a, b) {
  let title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  function find(arr, item) {
    let index = arr.indexOf(item);
    if (index > 0) {
      currIndex = index;
      check = true;
    }
  }

  return function () {
    find(a, b);
    if (check == true) {
      return `The item is present and is at index ${currIndex}`;
    } else {
      return `The item is not present and is at index ${currIndex}`;
    }
  };
}
