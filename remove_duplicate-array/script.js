// Remove duplicate members from an array

// 1. set method

let arrDuplicate = [1, 2, 2, 4, 5, 4, 6, 4, 3, 8, 2, 1];

// create a Set form the array, which automatically removes the duplicates

let uniqueArray = [...new Set(arrDuplicate)];

console.log(uniqueArray);

// 2. filter along with indexOf()

let arrayWithDuplicates = [1, 2, 2, 4, 5, 4, 6, 4, 3, 8, 2, 1];

let newArray = arrayWithDuplicates.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(newArray);

// 3. using loop method

let arrayDuplicates = [1, 2, 2, 4, 5, 4, 6, 4, 3, 8, 2, 1];
let newUniqueArr = [];

for (let i = 0; i < arrayDuplicates.length; i++) {
  if (newUniqueArr.indexOf(arrayDuplicates[i]) === -1) {
    newUniqueArr.push(arrayDuplicates[i]);
  }
}

console.log(newUniqueArr);

/* 
  We can solve this issue with different method

  1. set method
  2. filter along with indexOf()
  3. Using loop

  1. using set method is concise and efficient for removing duplicates. If we are looking for the most efficient solution and
    especially for large arrays then set property is the best solution.
 */
